import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//准备actions——用于响应组件中的动作
const actions = {
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
};

//准备mutations——用于操作数据（state）
const mutations = {
  ADD(state, value) {
    console.log('mutations中的ADD被调用了');
    state.sum += value;
  },
  SUB(state, value) {
    console.log('mutations中的SUB被调用了');
    state.sum -= value;
  }
};

//准备state——用于存储数据
const state = {
  sum: 0
};

//准备getters——用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10;
  }
};

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
