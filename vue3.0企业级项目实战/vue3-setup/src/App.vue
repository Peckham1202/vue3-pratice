<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { ref, reactive } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const obj = reactive({ foo: 'bar' });

    setTimeout(() => {
      // 通过 ref 包裹的变量，需要通过 .value 的形式修改变量，在模板中使用无需使用 .value ，因为在 setup 内 return 的时候，已经帮你接开。
      count.value = 1;
      obj.foo = 'foo';
    }, 2000);

    return {
      count,
      obj
    }
  }
}
</script>

<template>
  <div>
    {{ count }} {{ obj.foo }}
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
