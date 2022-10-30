<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo" />
        <TodoList :todos="todos" :checkDone="checkDone" :deleteTodo="deleteTodo" />
        <TodoFooter v-show="todos.length > 0" :todos="todos" :clearTodo="clearTodo" :checkAll="checkAll" />
      </div>
    </div>

  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoList from './components/TodoList.vue';
import { nanoid } from 'nanoid';

export default {
  name: 'App',
  components: { TodoHeader, TodoFooter, TodoList },
  data() {
    return {
      todos: [
        { id: nanoid(), title: '打代码', done: false },
        { id: nanoid(), title: '睡觉', done: false },
        { id: nanoid(), title: '吃饭', done: false }
      ]
    }
  },
  methods: {
    checkDone(id) {
      for (let todo of this.todos) {
        if (todo.id === id) {
          todo.done = !todo.done;
          console.log(todo.done);
        }
      }
    },
    addTodo(obj) {
      if (obj) {
        this.todos.push(obj);
      }
    },
    clearTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    checkAll(done) {
      for (let todo of this.todos) {
        todo.done = done;
      }
    }
  }
}
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
