<template>
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import Student from './components/Student.vue';
import School from './components/School.vue';

export default {
  name: 'App',
  components: {
    School,
    Student
  }
}
</script>
