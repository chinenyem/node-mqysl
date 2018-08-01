import Vue from 'vue';
import Vuex from 'vuex'
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import DashbaordTeacherView from '@/views/DashboardTeacherView.vue';
import CreateCourse from '@/views/CreateCourse.vue';
import CourseManagement from '@/views/CourseManagement.vue';
import StudentManagement from '@/views/StudentManagement.vue';
import InboxManagement from '@/views/InboxManagement.vue';
import Student_Data from '@/views/Student_Data.vue';
import TeacherPage from '@/views/TeacherPage.vue';
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
      path: '/teacher',
      name: 'dashboardTeacher',
      component: DashbaordTeacherView,
      beforeEnter: (to, from, next) => {
        //changed this to permssion and role
        console.log("test")
        console.log(Store.state.token)
        if (Store.state.token) {
           next()
         } else {
           next('/')
         }
      },
      children: [

        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '/teacher',
          name:'TeacherPage',
          component: TeacherPage
        },{
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'create_course',
          name: 'CreateCourse',
          component: CreateCourse
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'course_management',
          component: CourseManagement
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'student_management',
          name: 'StudentManagement',
          component: StudentManagement
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'inbox',
          name: 'InboxManagement',
          component: InboxManagement
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'student/:id',
          name: 'Student_Data',
          component: Student_Data
        }
      ]
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
