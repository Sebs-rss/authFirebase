<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4 subcontainer">
        <h1>Sign Up</h1>
        <form @submit.prevent="signUp">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="Email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" required />
          </div>
          <button type="submit" class="btn btn-primary">Inscribirme</button>
        </form>
      </div>
    </div>
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
  text-align: left ;
  width: 300px;
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


</style>