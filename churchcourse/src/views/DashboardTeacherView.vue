<template>
  <div id="app">
     <v-app id="example-2" standalone>
      <v-navigation-drawer absolute persistent light :mini-variant.sync="mini" v-model="drawer" overflow>
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar tag="div">
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click.native.stop="mini = !mini">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile
              v-for="item in items"
              :key="item.title"
              :to="item.path"
              >

              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content

              :style="{ cursor: 'pointer'}">
                <v-list-tile-title >{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>

          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed class="indigo darken-4" dark>
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Toolbar</v-toolbar-title>
      </v-toolbar>
      <main>
        <v-container fluid>
          <div class="title">Click on sidebar to re-open.</div>
          <div class="mainpart">
            <router-view/>
          </div>
        </v-container>
      </main>
    </v-app>
  </div>

</template>




<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DashboardTeacher from '@/components/DashboardTeacher.vue'; // @ is an alias to /src

// @Component({
//   components: {
//   DashboardTeacher,
//   },
//   })
// export default class DashbaordTeacherView extends Vue {
//   drawer = null
//
// }
//
// Vue.component('DashboardTeacher', DashboardTeacher);
//
// export default Vue.extend({
//    el: '#app',
//     data: () => ({
//
//     }),
//
//     props: {
//       source: String
//     }
//
//
// })

export default Vue.extend({
  el: '#app',
  data () {
      return {
        drawer: true,
        items: [
          { path: '/teacher/create_course', icon: 'dashboard', title: 'Create Course' },
          { path: '/teacher/course_management', icon: 'question_answer', title:'Courses' },
          { path: '/teacher/student_management', icon: 'question_answer', title:'Students' }
        ],
        mini: false,
        right: null
      }
    }
})
</script>
