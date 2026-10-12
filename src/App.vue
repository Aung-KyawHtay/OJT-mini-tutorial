<template>
  <div class="app-container">
    <nav class="navbar">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/todos" class="nav-link">Todo List</RouterLink>
      <RouterLink to="/api-test" class="nav-link">API Test</RouterLink>
    </nav>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  padding: 24px;
  background-color: #f4f7fb;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgb(15 23 42 / 5%);
}

.nav-link {
  padding: 10px 18px;
  color: #475569;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  transition:
    background-color 0.2s,
    olor 0.2s;
}

.nav-link:hover {
  color: #2563eb;
  background-color: #eff6ff;
}

.nav-link.router-link-exact-active {
  color: #ffffff;
  background-color: #2563eb;
}

.main-content {
  max-width: 1000px;
  margin: 28px auto 0;
}

@media (max-width: 600px) {
  .app-container {
    padding: 14px;
  }

  .navbar {
    gap: 6px;
    padding: 10px;
  }

  .nav-link {
    padding: 9px 12px;
    font-size: 14px;
  }

  .main-content {
    margin-top: 20px;
  }
}
</style>
