<template>
  <div class="todo-footer" v-show="todoCount">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ todoDoneCount }}</span> /全部{{ todoCount }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: ["todos"],
  computed: {
    todoCount() {
      return this.todos.length;
    },
    todoDoneCount() {
      return this.todos.reduce((pre, curr) => {
        return curr.done ? pre + 1 : pre;
      }, 0);
    },
    isAll: {
      get() {
        return this.todoCount === this.todoDoneCount;
      },

      set(done) {
        this.$emit('checkAll', done);
      }

    }
  },
  methods: {
    clearAll() {
      this.$emit('clearAllTodo');
    }
  }
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>