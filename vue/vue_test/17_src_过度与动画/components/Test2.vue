<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="!isShow" key="2">牛肉丸</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style>
h1 {
  background-color: pink;
}

.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-to,
.hello-leave {
  transform: translateX(0)
}

.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
</style>