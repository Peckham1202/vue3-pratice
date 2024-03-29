import axios from 'axios';
import { nanoid } from 'nanoid';

export default {
  namespaced: true,
  actions: {
    addPersonWang(ctx, value) {
      if (value.name.startsWith('王')) {
        ctx.commit('ADD_PERSON', value);
      } else {
        alert('添加的人必须姓王！');
      }
    },
    addPersonServer(ctx) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          ctx.commit('ADD_PERSON', { id: nanoid(), name: response.data });
        },
        error => {
          alert(error.message);
        }
      );
    }
  },

  mutations: {
    ADD_PERSON(state, value) {
      console.log('mutations中的ADD_PERSON被调用了');
      state.personList.unshift(value);
    }
  },

  state: {
    personList: [{ id: '001', name: '张三' }]
  },

  getters: {
    firstPersonName(state) {
      return state.personList[0].name;
    }
  }
};
