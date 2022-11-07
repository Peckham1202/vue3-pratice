<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '牛肉丸',
      address: '广东广州'
    };
  },
  mounted() {
    this.$bus.$on('hello', (data) => {
      alert('我是School组件，我收到了数据：' + data);
    });
  },
  beforeDestroy() {
    this.$bus.$off('hello');
  }
}
</script>

<style>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>