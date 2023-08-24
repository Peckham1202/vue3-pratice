<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前点击时鼠标的坐标为：x: {{ point.x }}, y: {{ point.y }}</h2>
</template>

<script>
import usePoint from '@/hooks/usePoint';
import { ref } from 'vue';


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Demo',
  setup() {
    console.log('---setup---');

    let sum = ref(0);
    let point = usePoint();


    return { sum, point };
  }
}
</script>