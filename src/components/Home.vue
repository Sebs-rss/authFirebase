<template>
    <div>
      <h1>Home</h1>
      <p>Te doy la bienvenida a la página de inicio, solo accesible para usuarios autenticados.</p>
      <button class="btn btn-primary" @click="logout">Cerrar sesión</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { auth } from '../firebaseConfig';
  import { signOut } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
      const user = ref(null);
  
      // cuando el componente se monta, se verifica si hay un usuario autenticado en firebase
      // si no hay usuario autenticado, se redirige a la página de login
      onMounted(() => {
        user.value = auth.currentUser;
        if (!user.value) {
          router.push('/login');
        }
      });
  
      const logout = async () => {
        try {
          await signOut(auth);
          router.push('/login');
        } catch (error) {
          console.error("Error signing out: ", error);
        }
      };
  
      return { user, logout };
    }
  };
  </script>
  
  <style scoped>
  button {
    margin-top: 20px;
  }
  </style>
  