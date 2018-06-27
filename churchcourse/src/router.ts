import Vue from 'vue';
import Vuex from 'vuex'
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import DashbaordTeacherView from '@/views/DashboardTeacherView.vue';
import Store from './store';

Vue.use(Router);
Vue.use(Vuex);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboardTeacher',
      name: 'dashboardTeacher',
      component: DashbaordTeacherView,
      beforeEnter: (to, from, next) => {
        //changed this to permssion and role
        if (Store.state.token) {
           next()
         } else {
           next('/')
         }
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
       beforeEnter: (to, from, next) => {
        //changed this to permssion and role
        if (Store.state.token) {
           next()
         } else {
           next('/')
         }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      beforeEnter: (to, from, next) => {
        if (Store.state.token) {
           next()
         } else {
           next('/')
         }
      }
    },
  ],
});
