<template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="signUp">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { auth } from '../firebaseConfig';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
  
      const signUp = async () => {
        try {
          await createUserWithEmailAndPassword(auth, email.value, password.value);
          alert('User registered successfully');
        } catch (error) {
          alert(error.message);
        }
      };
  
      return { email, password, signUp };
    }
  };
  </script>
  