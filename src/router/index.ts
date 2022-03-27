import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRepositories from '@/views/VueRepositories.vue';
import VueContributors from '@/views/VueContributors.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'vueRepositories',
      component: VueRepositories,
    },
    {
      path: '/contributors',
      name: 'vueContributors',
      component: VueContributors,
    },
  ],
});

export default router;
