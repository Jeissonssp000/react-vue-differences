import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '../views/HomeView.vue';
import UploadView from '../views/UploadView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/upload',
      name: 'Upload',
      component: UploadView
    }
  ]
});