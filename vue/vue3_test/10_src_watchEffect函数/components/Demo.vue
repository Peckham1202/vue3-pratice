<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg += '！'">修改信息</button>
  <hr>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}K</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue';


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Demo',
  setup() {
    let sum = ref(0);
    let msg = ref('你好啊！');
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    });

    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.job.j1.salary;
      console.log('watchEffect执行了');
      console.log('x1是', x1);
      console.log('x2是', x2);
    });

    return {
      sum,
      msg,
      person
    }
  }
}
</script>