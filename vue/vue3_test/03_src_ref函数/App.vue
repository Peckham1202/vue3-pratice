<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <button @click="sayHello">欢迎光临</button>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'App',
  setup() {
    let name = ref('张三');
    let age = ref(18);
    let sex = ref('男');
    let job = ref({
      type: '前端工程师',
      salary: '30K'
    })

    const sayHello = () => {
      alert(`我叫${name.value}，我${age.value}岁了， 你好啊！`);
    };

    const changeInfo = () => {
      name.value = '李四';
      age.value = 48;
      job.value.type = 'UI设计师';
      job.value.salary = '60K';
    }

    return {
      name,
      age,
      sex,
      job,
      sayHello,
      changeInfo
    }
  }
}
</script>
