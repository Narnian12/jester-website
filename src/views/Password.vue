<template>
  <div class="login">
    <h1 class="header">PJ</h1>
    <div class="container">
      <h2 class="directions text-center">Enter Password</h2>
      <br />
      <form class="loginForm" @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="password" class="label"></label>
          <input id="password" v-model="password" type="password" class="input" />
          <span class="error-message">{{ errorMessage }}</span>
        </div>
        <br />
        <button class="button" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Password',
  setup() {
    const password = ref('')
    const errorMessage = ref('')
    const router = useRouter()

    const handleSubmit = () => {
      if (password.value === 'password123') {
        localStorage.setItem('auth', 'true')
        router.push('/') // Redirect to Home page
      } else {
        errorMessage.value = 'Password incorrect. Please contact Peter for access.'
      }
    }

    return { password, errorMessage, handleSubmit }
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: $body-font;
  background-color: #fff;
  font-size: 24px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

.header {
  font-size: 150px;
  padding: 20;
  margin: 50;
  text-align: center;
  color: $secondary;
}

.directions {
  font-family: $body-font;
  font-size: 18px;
}

.container {
  max-width: 98vw;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;
}

.text-center {
  text-align: center;
  font-weight: 200;
  font-size: 18px;
}

.login .container {
  color: $secondary;
  max-width: 400px;
  margin: 3rem auto;
  padding: 50px;
  border-radius: 15px;
  background-color: $primary;
}

.input {
  appearance: none;
  display: block;
  width: 100%;
  color: $secondary;
  border: 1px solid rbg(180, 180, 180);
  background-color: white;
  padding: 1rem;
  border-radius: 0.25rem;
  margin: 0 auto;
  box-sizing: border-box;
}

.input.input-error {
  border: 1px solid #ab2232;
}

.input.input-error:focus {
  border: 1px solid #ab2232;
}

.input:focus {
  outline: none;
  border: 1px solid #3a424a;
  background-clip: padding-box;
}

.error-message {
  font-size: 14px;
  font-weight: 100;
  color: #ab2232;
  box-sizing: border-box;
  width: 100%;
}

.button {
  @include button();
}

.button:hover {
  filter: brightness(130%);
}
</style>
