<template>
  <div class="home">
    StudentManagement
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//import DashbaordTeacher from '@/components/DashboardTeacher.vue'; // @ is an alias to /src

@Component({ 
  components: {
 // DashbaordTeacher,
  },
  })
export default class StudentManagement extends Vue {}
</script>