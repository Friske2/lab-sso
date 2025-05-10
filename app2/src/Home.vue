<template>
  <div class="home">
    <h1>Welcome to Home Page</h1>
    <p>This is the home page of the application.</p>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    logout() {
      // Logic to handle logout
      fetch("http://localhost:9000/logout", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => {
          if (response.ok) {
            // Redirect to login page or perform any other action
            window.location.href = `http://localhost:9000?redirect_uri=${window.location.href}`;
          } else {
            console.error("Logout failed");
          }
        })
        .catch((error) => {
          console.error("Error during logout:", error);
        });
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>
