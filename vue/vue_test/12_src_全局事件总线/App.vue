<template>
  <div class="app">
    <School />
    <Student />
  </div>
</template>

<script>
import Student from './components/Student.vue';
import School from './components/School.vue';

export default {
  name: 'App',
  components: { School, Student },
  data() {
    return {
      msg: '你好啊！'
    }
  }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>