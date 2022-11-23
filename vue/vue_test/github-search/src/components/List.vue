<template>
  <div class="row">
    <div v-show="users.length > 0" class="card" v-for="user in users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width:100px' />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <h1 v-show="isFirst">欢迎使用github用户搜索</h1>
    <h1 v-show="isLoading">加载中...</h1>
    <h1 v-show="errMsg">{{ errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ListVue',
  data() {
    return {
      users: [],
      isFirst: true,
      isLoading: false,
      errMsg: ''
    }
  },
  mounted() {
    this.$bus.$on('updateUserData', (ctx) => {
      this.isFirst = false;
      this.users = ctx.users;
      this.isLoading = ctx.isLoading;
      this.errMsg = ctx.errMsg;
    });
  }
}
</script>

<style scoped>
.album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card>img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>