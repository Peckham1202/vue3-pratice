<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点我提示学校名称</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '牛肉丸大学',
      address: '广东广州'
    }
  },
  methods: {
    showName() {
      alert(this.name);
    }
  }
}
</script>

<style>
.school {
  background-color: orange;
}
</style>