import Vue from 'vue';
import App from './App.vue';
import store from './store';

new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app');