<template>
  <div>
    <h1 clss="title">你好啊！</h1>
    <School />
    <Student />
  </div>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue';

export default {
  name: 'App',
  components: { School, Student },
}
</script>

<style scoped>
.title {
  color: red;
}
</style>
