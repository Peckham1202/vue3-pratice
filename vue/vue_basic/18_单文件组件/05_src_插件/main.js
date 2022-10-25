import Vue from 'vue';
import App from './App.vue';

//引入插件
import plugins from './plugins';

Vue.use(plugins, 1, 2, 3);

new Vue({
  render: h => h(App)
}).$mount('#app');
