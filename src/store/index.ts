import { defineStore } from 'pinia';
import myFetch from '@/gql';
import { viewer } from './queries';

const ERROR_MESSAGE = 'Wrong PAT. Please, try again!';

const useMainStore = defineStore('main', {
  state: () => ({
    user: 'Unknown User',
    token: '',
    errorMessage: '',
  }),
  actions: {
    setToken(token: string) {
      myFetch(token, viewer).then(({data}) => {
        this.user = data && data.viewer ? data.viewer.login : '';
        this.token = token;
        this.errorMessage = '';
      })
      .catch(() => {
        this.errorMessage = ERROR_MESSAGE;
      });
    },
  },
});

export default useMainStore;
