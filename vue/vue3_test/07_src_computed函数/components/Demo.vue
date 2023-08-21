<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.firstName" />
  <br />
  名：<input type="text" v-model="person.lastName" />
  <br />
  全名：<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Demo',
  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三'
    });

    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName;
      },

      set(value) {
        const nameArr = value.split('-');
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      }
    })

    return {
      person
    }
  },
}
</script>