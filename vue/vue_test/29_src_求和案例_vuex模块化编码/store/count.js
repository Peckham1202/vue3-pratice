export default {
  namespaced: true,
  actions: {
    addOdd(ctx, value) {
      console.log('actions中的addOdd被调用了');
      if (ctx.state.sum % 2) {
        ctx.commit('ADD', value);
      }
    },

    addWait(ctx, value) {
      console.log('actions中的addWait被调用了');
      setTimeout(() => {
        ctx.commit('ADD', value);
      }, 500);
    }
  },

  mutations: {
    ADD(state, value) {
      console.log('mutations中的ADD被调用了');
      state.sum += value;
    },
    SUB(state, value) {
      console.log('mutations中的SUB被调用了');
      state.sum -= value;
    }
  },

  state: {
    sum: 0,
    school: 'Bilibili',
    subject: '前端'
  },

  getters: {
    bigSum(state) {
      return state.sum * 10;
    }
  }
};
