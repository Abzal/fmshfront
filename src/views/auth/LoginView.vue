<template>
  <div class="wrapper">

    <v-container>
      <v-form @submit="login">
        <v-text-field v-model="username" label="Корпоративная почта школы"></v-text-field>
        <v-text-field v-model="password" label="Пароль" type="password"></v-text-field>
        <v-btn type="submit" color="success">Вход</v-btn>
      </v-form>
    </v-container>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },

    methods: {
      login() {
        // Add your login logic here
        if (this.username === 'test' && this.password === 'test') {
          // Successful login, redirect or show a success message
          alert('Login successful');
        } else {
          // Failed login, show an error message
          alert('Login failed');
        }
      },
    },

  }
</script>