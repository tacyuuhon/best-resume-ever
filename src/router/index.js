import Vue from 'vue';
import Router from 'vue-router';
import Resume from '@/pages/resume';
import Home from '@/pages/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/about/material-dark',
      component: Home
    },
    {
      path: '/about/:resumeid',
      name: 'resume',
      component: Resume
    }
  ]
});
