<script setup>
  import axios from 'axios'
  import { reactive } from 'vue'
  import useAuth from '@/composables/useAuth';
  import Navigation from '@/components/Navigation.vue'

  const { setName } = useAuth();

  const form = reactive({
    email: 'janroe.dev@example.net',
    password: 'P@ssw0rd',
  });

  const login = async () => {
    console.log('login')

    setName('jonrue')
    // await axios.get('/sanctum/csrf-cookie')
    // await axios.post('/login', form)

    // axios.get('/api/user').then((response) => {
    //   console.log(response)
    // })
  }
</script>

<template>
  <Navigation />
  <main>
    <form v-on:submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" v-model="form.email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="text" id="password" v-model="form.password">
      </div>
      <button type="submit">Log in</button>
    </form>
  </main>
</template>
