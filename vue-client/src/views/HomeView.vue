<script setup>
  import { reactive } from 'vue'
  import useAuth from '@/composables/useAuth';
  import Navigation from '@/components/Navigation.vue'

  const { login: loginAction, errors } = useAuth();

  const form = reactive({
    email: 'janroe.dev@example.net',
    password: 'P@ssw0rd',
  });

  const login = async () => {
    // console.log('login')
    loginAction(form)

    // setName('jonrue')
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
        <p v-if="errors.email">{{ errors.email[0] }}</p>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="text" id="password" v-model="form.password">
        <p v-if="errors.password">{{ errors.password[0] }}</p>
      </div>
      <button type="submit">Log in</button>
    </form>
  </main>
</template>
