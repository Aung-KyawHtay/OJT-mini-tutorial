<script setup>
import { ref } from "vue";
import TodoItem from "@/components/TodoItem.vue";

const newTodo = ref("");

const todos = ref([
  { id: 1, title: "Learn Vue 3", completed: false },
  { id: 2, title: "Practice Vue Router", completed: true },
  { id: 3, title: "Build Todo App", completed: false },
]);

function addTodo() {
  if (newTodo.value.trim() === "") {
    return;
  }

  todos.value.unshift({
    id: Date.now(),
    title: newTodo.value.trim(),
    completed: false,
  });

  newTodo.value = "";
}

function toggleTodo(id) {
  const todo = todos.value.find((todo) => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
  }
}

function deleteTodo(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}
</script>

<template>
  <main class="todo-page">
    <section class="todo-card">
      <header class="todo-header">
        <p class="eyebrow">STAY ORGANIZED</p>
        <h1>My Notes</h1>
        <p class="subtitle">Keep track of your daily tasks.</p>
      </header>

      <form class="todo-form" @submit.prevent="addTodo">
        <input
          v-model="newTodo"
          type="text"
          placeholder="Enter a new task..."
          aria-label="Enter a new task"
        />

        <button class="add-button" type="submit"><span>+</span> Add</button>
      </form>

      <div class="list-heading">
        <h2>My Tasks</h2>
        <span class="task-count">{{ todos.length }} tasks</span>
      </div>

      <ul v-if="todos.length" class="todo-list">
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :task="todo"
          @toggle="toggleTodo"
          @delete="deleteTodo"
        />
      </ul>

      <div v-else class="empty-state">
        <p>No tasks yet.</p>
        <span>Add a task above to get started!</span>
      </div>
    </section>
  </main>
</template>

<style scoped>
.todo-page {
  width: 100%;
  padding: 20px 0 40px;
}

.todo-card {
  max-width: 680px;
  margin: 0 auto;
  padding: 32px;
  background: #ffffff;
  border: 1px solid #e5eaf2;
  border-radius: 18px;
  box-shadow: 0 12px 35px rgb(15 23 42 / 6%);
}

.todo-header {
  margin-bottom: 28px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #2563eb;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

.todo-header h1 {
  margin: 0;
  color: #172033;
  font-size: 32px;
  font-weight: 750;
}

.subtitle {
  margin: 10px 0 0;
  color: #718096;
  font-size: 15px;
  line-height: 1.6;
}

.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.todo-form input {
  flex: 1;
  min-width: 0;
  padding: 13px 15px;
  color: #1e293b;
  background: #f8fafc;
  border: 1px solid #dbe2ea;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.todo-form input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgb(59 130 246 / 12%);
}

.add-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 18px;
  color: #ffffff;
  background: #2563eb;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s,
    transform 0.2s;
}

.add-button:hover {
  background: #1d4ed8;
}

.add-button:active {
  transform: scale(0.97);
}

.add-button span {
  font-size: 20px;
  line-height: 1;
}

.list-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.list-heading h2 {
  margin: 0;
  color: #334155;
  font-size: 17px;
}

.task-count {
  padding: 5px 10px;
  color: #475569;
  background: #f1f5f9;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.todo-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.empty-state {
  padding: 32px 16px;
  text-align: center;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
}

.empty-state p {
  margin: 0 0 6px;
  color: #334155;
  font-weight: 600;
}

.empty-state span {
  color: #94a3b8;
  font-size: 14px;
}

@media (max-width: 600px) {
  .todo-page {
    padding-top: 8px;
  }

  .todo-card {
    padding: 22px 16px;
    border-radius: 14px;
  }

  .todo-header h1 {
    font-size: 27px;
  }

  .todo-form {
    gap: 8px;
  }

  .add-button {
    padding: 12px;
  }
}
</style>
