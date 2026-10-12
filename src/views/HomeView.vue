<template>
  <div class="welcome-card">
    <div class="welcome-content">
      <h1 class="welcome-title">Welcome to Todo Manager</h1>
      <p class="welcome-subtitle">Manage your daily tasks easily.</p>

      <div class="action-buttons">
        <RouterLink to="/todos" class="primary-btn">View Todo List</RouterLink>
        <RouterLink to="/api-test" class="secondary-btn">Test API</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 48px 24px;
  box-shadow: 0 4px 12px rgb(15 23 42 / 5%);
  text-align: center;
}

.welcome-content {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-wrapper {
  width: 70px;
  height: 70px;
  background-color: #eff6ff;
  color: #2563eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border: 1px solid #dbeafe;
}

.welcome-title {
  font-size: 26px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 10px 0;
}

.welcome-subtitle {
  font-size: 15px;
  color: #64748b;
  margin: 0 0 28px 0;
  line-height: 1.5;
}

.action-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-btn {
  background-color: #2563eb;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition:
    background-color 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 2px 6px rgb(37 99 235 / 20%);
}

.primary-btn:hover {
  background-color: #1d4ed8;
}

.secondary-btn {
  background-color: #f1f5f9;
  color: #475569;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid #e2e8f0;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.secondary-btn:hover {
  background-color: #e2e8f0;
  color: #1e293b;
}

@media (max-width: 600px) {
  .welcome-card {
    padding: 32px 16px;
  }

  .welcome-title {
    font-size: 22px;
  }

  .action-buttons {
    flex-direction: column;
    width: 100%;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
