<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @click="checkDone(todo.id)" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="todo.done" @click="deleteTodo(todo.id)">
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ["todo", "checkDone", "deleteTodo"],

}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>