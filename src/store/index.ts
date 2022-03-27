import { defineStore } from 'pinia';
import myFetch from '@/gql';
import { Repo, User, UsersInfo, RepositoryInfo } from '@/types';
import { viewer, searchRepos } from './queries';
import { repositoryColumns, usersColumns } from './data';

const ERROR_MESSAGE_PAT = 'Wrong PAT. Please, try again!';
const ERROR_MESSAGE_SEARCH_REPO = 'Cannot find requested repositories.';

const useMainStore = defineStore('main', {
  state: () => ({
    user: 'Unknown User',
    token: '',
    errorMessage: '',
    repos: [],
    users: [],
    reposCount: 0,
    repositoryTableHeader: 'Search for GitHub repositories.',
    repositoryColumns,
    usersColumns,
    usersTableHeader: 'Search for GitHub users',
  }),
  actions: {
    setToken(token: string) {
      myFetch(token, viewer).then(({data}) => {
        this.user = data && data.viewer ? data.viewer.login : '';
        /**
         * for better UI token might be placed to cookies to not make
         * user authorize every time after page reloading
         */
        this.token = token;
        this.errorMessage = '';
      })
      .catch(() => {
        this.errorMessage = ERROR_MESSAGE_PAT;
      });
    },
    searchRepos(substr: string) {
      const variables = {
        query: substr,
      };
      myFetch(this.token, searchRepos, variables).then(({data, errors}) => {
        this.reposCount = data.search.repositoryCount;
        this.repositoryTableHeader = `Found ${data.search.repositoryCount} repositories.`;
        this.repos = data.search.edges.map((item: RepositoryInfo, index: number): Repo => {
          return [
            {
              type: 'name',
              value: item.node.name,
            },
            {
              type: 'url',
              value: item.node.url
            },
            {
              type: 'owner',
              value: item.node.owner.login,
            },
            {
              type: 'totalUsers',
              value: item.node.collaborators?.totalCount ,
            },
            {
              type: 'users',
              value: item.node.collaborators?.nodes?.map((user: UsersInfo): User => {
                return {
                  name: user.name,
                  url: user.url,
                };
              }),
            },
            {
              type: 'errorMessage',
              /**
               * here is my assumptions that the error array with errors is 
               * always consistent with the data array
               */
              value: errors[index].message,
            },
          ];
        });
        this.errorMessage = '';
      })
      .catch(() => {
        this.errorMessage = ERROR_MESSAGE_SEARCH_REPO;
      });
    }
  },
});

export default useMainStore;
