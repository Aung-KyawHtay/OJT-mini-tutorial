<script setup>
import { RouterLink } from "vue-router";
defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["delete", "toggle"]);
</script>

<template>
  <li class="todo-item" :class="{ completed: task.completed }">
    <div class="left-section">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="emit('toggle', task.id)"
        class="todo-checkbox"
      />
      <RouterLink :to="`/todos/${task.id}`" class="todo-link">
        {{ task.title }}
      </RouterLink>
    </div>

    <button @click="emit('delete', task.id)" class="delete-btn" type="button">
      Delete
    </button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.todo-item:hover {
  border-color: #cbd5e1;
  box-shadow: 0 4px 12px rgb(15 23 42 / 4%);
}

.left-section {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
}

.todo-checkbox {
  width: 18px;
  height: 18px;
  accent-color: #2563eb;
  cursor: pointer;
}

.todo-link {
  font-size: 15px;
  color: #1e293b;
  text-decoration: none;
  word-break: break-word;
  transition: color 0.2s;
}

.todo-link:hover {
  color: #2563eb;
  text-decoration: underline;
}

.completed .todo-link {
  color: #94a3b8;
  text-decoration: line-through;
}

.delete-btn {
  background-color: #fef2f2;
  color: #ef4444;
  border: 1px solid #fee2e2;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.delete-btn:hover {
  background-color: #ef4444;
  color: #ffffff;
}

@media (max-width: 600px) {
  .todo-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .delete-btn {
    align-self: flex-end;
  }
}
</style>
