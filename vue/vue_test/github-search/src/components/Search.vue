<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
      <button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SearchVue',
  data() {
    return {
      keyWord: '',
    }
  },
  methods: {
    searchUser() {
      this.$bus.$emit('updateUserData', { users: [], isLoading: true, errMsg: '' });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then((response) => {
        this.$bus.$emit('updateUserData', { users: response.data.items, isLoading: false, errMsg: '' });
      }).catch((error) => {
        console.log(error);
        this.$bus.$emit('updateUserData', { users: [], isLoading: false, errMsg: '获取用户信息失败！' });
      });
    }
  }
}
</script>