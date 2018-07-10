<template>
  <div>
    something
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
export default class CreateCourse extends Vue {}
</script>