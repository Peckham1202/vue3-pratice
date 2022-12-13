import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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

const state = {
  sum: 0
};

export default new Vuex.Store({
  actions,
  mutations,
  state
});
