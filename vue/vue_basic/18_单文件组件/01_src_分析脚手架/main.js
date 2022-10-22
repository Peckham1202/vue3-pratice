/**
 * 该文件是整个项目的入口
 */

//引入Vue
import Vue from 'vue';

//引入 App 组件，是所有组件的父组件
import App from './App.vue';

//创建 Vue 示例对象 -- vm
new Vue({
  //将 App 组件放入容器中
  render: (h) => h(App),
}).$mount('#app');
