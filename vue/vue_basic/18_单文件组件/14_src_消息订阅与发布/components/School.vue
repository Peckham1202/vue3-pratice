<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
  name: 'School',
  data() {
    return {
      name: '牛肉丸',
      address: '广州',
    }
  },
  mounted() {
    this.pubId = pubsub.subscribe('hello', (msg, data) => {
      alert('有人发布了 hello 消息，回调执行了：' + msg + data);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  }
}
</script>

<style>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>