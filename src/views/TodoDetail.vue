<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();

const todos = [
  { id: 1, title: "Learn Vue 3", completed: false },
  { id: 2, title: "Practice Vue Router", completed: true },
  { id: 3, title: "Build Todo App", completed: false },
];

const todo = computed(() => {
  return todos.find((item) => item.id === Number(route.params.id));
});
</script>

<template>
  <div class="detail-card">
    <div class="card-header">
      <h1 class="title">Todo Detail</h1>
      <span v-if="todo" class="id-badge">ID #{{ todo.id }}</span>
    </div>

    <!-- Todo Found State -->
    <div v-if="todo" class="detail-content">
      <div class="info-group">
        <label class="info-label">Task Title</label>
        <p class="info-value">{{ todo.title }}</p>
      </div>

      <div class="info-group">
        <label class="info-label">Status</label>
        <div>
          <span
            class="status-badge"
            :class="todo.completed ? 'badge-success' : 'badge-pending'"
          >
            {{ todo.completed ? "Completed" : "Pending" }}
          </span>
        </div>
      </div>
    </div>

    <!-- Not Found State -->
    <div v-else class="not-found-box">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="not-found-icon"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
      <p class="not-found-text">Todo not found.</p>
    </div>

    <div class="card-footer">
      <RouterLink to="/todos" class="back-btn">
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
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span>Back to Todo List</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.detail-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 4px 12px rgb(15 23 42 / 5%);
  max-width: 600px;
  margin: 0 auto;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.id-badge {
  background-color: #eff6ff;
  color: #2563eb;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid #dbeafe;
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}

.info-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: #f8fafc;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
}

.info-label {
  font-size: 13px;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  font-size: 16px;
  color: #1e293b;
  margin: 0;
  font-weight: 500;
}

.status-badge {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 6px;
}

.badge-success {
  background-color: #dcfce7;
  color: #16a34a;
}

.badge-pending {
  background-color: #fef3c7;
  color: #d97706;
}

.not-found-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  gap: 12px;
  color: #ef4444;
}

.not-found-icon {
  color: #ef4444;
}

.not-found-text {
  font-size: 15px;
  font-weight: 500;
  margin: 0;
}

.card-footer {
  border-top: 1px solid #f1f5f9;
  padding-top: 20px;
  display: flex;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #f1f5f9;
  color: #475569;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid #e2e8f0;
  transition: all 0.2s;
}

.back-btn:hover {
  background-color: #e2e8f0;
  color: #1e293b;
}

@media (max-width: 600px) {
  .detail-card {
    padding: 18px;
  }

  .back-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
