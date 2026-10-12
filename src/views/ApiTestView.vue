<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const todos = ref([]);
const loading = ref(true);
const error = ref("");

async function getTodos() {
  loading.value = true;
  error.value = "";
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5",
    );

    todos.value = response.data;
  } catch (err) {
    error.value = "Failed to load todos. Please try again.";
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  getTodos();
});
</script>

<template>
  <div class="todo-card">
    <div class="header-section">
      <div>
        <h1 class="title">API Todo List</h1>
        <p class="subtitle">Fetched from JSONPlaceholder API</p>
      </div>
      <button @click="getTodos" class="reload-btn" :disabled="loading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          :class="{ spin: loading }"
        >
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
        <span>Reload</span>
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="status-box">
      <div class="spinner"></div>
      <p>Loading todos...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="status-box error-box">
      <p>{{ error }}</p>
    </div>

    <!-- Todo List -->
    <ul v-else class="todo-list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="todo-item"
        :class="{ completed: todo.completed }"
      >
        <label class="checkbox-container">
          <input
            type="checkbox"
            :checked="todo.completed"
            disabled
            class="custom-checkbox"
          />
          <span class="todo-title">{{ todo.title }}</span>
        </label>
        <span
          class="badge"
          :class="todo.completed ? 'badge-success' : 'badge-pending'"
        >
          {{ todo.completed ? "Completed" : "Pending" }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 24px;
}

.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
  flex-wrap: wrap;
  gap: 12px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.subtitle {
  font-size: 14px;
  color: #64748b;
  margin: 4px 0 0 0;
}

.reload-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #eff6ff;
  color: #2563eb;
  border: 1px solid #dbeafe;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.reload-btn:hover {
  background-color: #2563eb;
  color: #ffffff;
}

.status-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  color: #64748b;
  gap: 12px;
  font-size: 15px;
}

.error-box {
  color: #ef4444;
  background-color: #fef2f2;
  border-radius: 8px;
  border: 1px solid #fee2e2;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  transition: all 0.2s;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: default;
  flex: 1;
  margin-right: 12px;
}

.custom-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.todo-title {
  font-size: 15px;
  color: #334155;
}

.completed .todo-title {
  text-decoration: line-through;
  color: #94a3b8;
}

.badge {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  white-space: nowrap;
}

.badge-success {
  background-color: #dcfce7;
  padding: 10px;
}

.badge-pending {
  padding: 10px;
  background-color: #fef3c7;
}

/* Spinner Animation */
.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #e2e8f0;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.spin {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 600px) {
  .todo-card {
    padding: 16px;
  }

  .todo-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .badge {
    align-self: flex-end;
  }
}
</style>
