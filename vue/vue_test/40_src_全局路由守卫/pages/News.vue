<template>
  <ul>
    <li :style="{ opacity }">我来学习Vue了！！！</li>
    <li>news001 <input></li>
    <li>news002 <input></li>
    <li>news003 <input></li>
  </ul>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      opacity: 1,
    };
  },

  activated() {
    console.log('News组件被激活了');
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01;
      if (this.opacity < 0) this.opacity = 1;
    }, 16);
  },

  deactivated() {
    console.log('News组件失活了');
    clearInterval(this.timer);
  }
}
</script>