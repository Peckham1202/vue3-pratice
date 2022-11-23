<template>
  <div class="container">
    <SearchVue />
    <ListVue />
  </div>
</template>

<script>
import SearchVue from './components/Search.vue';
import ListVue from './components/List.vue';
export default {
  name: 'App',
  components: {
    SearchVue,
    ListVue
  }
}
</script>

