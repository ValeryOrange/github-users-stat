import { defineStore } from 'pinia';
import myFetch from '@/gql';
import { viewer } from './queries';

const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0,
    user: 'Unknown User',
    token: '',
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    setToken(token: string) {
      this.token = token;
      myFetch(this.token, viewer).then(({data}) => {
        this.user = data && data.viewer ? data.viewer.login : '';
      });
    },
  },
});

export default useMainStore;
