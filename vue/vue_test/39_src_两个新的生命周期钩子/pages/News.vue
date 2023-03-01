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
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01;
      if (this.opacity < 0) this.opacity = 1;
    }, 16);
  },

  deactivated() {
    clearInterval(this.timer);
  }
}
</script>