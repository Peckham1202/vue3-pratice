<template>
  <ul class="todo-main">
    <transition-group name="todo" appear>
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </transition-group>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
  name: 'TodoList',
  components: { TodoItem },
  props: ['todos']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

.todo-enter-active {
  animation: in-out 0.5s linear;
}

.todo-leave-active {
  animation: in-out 0.5s linear reverse;
}

@keyframes in-out {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0px);
  }
}
</style>