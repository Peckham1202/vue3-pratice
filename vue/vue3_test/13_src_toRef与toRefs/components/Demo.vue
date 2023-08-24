<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- 此处展示 person 用于查看源数据是否有变化 -->
  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <!-- 测试 toRef 用 -->
  <!-- <button @click="salary++">涨薪</button> -->

  <!-- 测试 toRefs 用 -->
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
// import { reactive, toRef } from 'vue';
import { reactive, toRefs } from 'vue';


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Demo',
  setup() {
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    });

    //toRef 示例
    // const name = toRef(person, 'name');
    // const age = toRef(person, 'age');
    // const salary = toRef(person.job.j1, 'salary');

    //toRefs 示例
    const x = toRefs(person);

    return { person, ...x };
  }
}
</script>