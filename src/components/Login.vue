<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <h1 class="text-center">Login</h1>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="Email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" required />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        alert('User logged in successfully');
      } catch (error) {
        alert(error.message);
      }
    };

    return { email, password, login };
  }
};
</script>

<style scoped>
input {
  width: 300px;
  height: 30px;
}

button {
  margin-top: 20px;
  width: 300px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>

