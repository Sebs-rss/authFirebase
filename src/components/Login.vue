<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4 subcontainer">
        <h1 class="text-center">Login</h1>
        <p>Por favor ingresa tus credenciales</p>
        <p>Si no tienes una cuenta, puedes <router-link to="/register">registrarte</router-link></p>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="Email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" required />
          </div>
          <button type="submit" class="btn btn-primary">Acceder</button>
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.row    {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subcontainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: left;
}

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

p {
  text-align: center;
  margin-bottom: 10px;
  width: 450px;
}

</style>

