import { createRouter, createWebHistory } from 'vue-router';
import SignUpView from '../views/SignUpView.vue';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import { auth } from '../firebaseConfig';

const routes = [
  { path: '/signup', component: SignUpView },
  { path: '/login', component: LoginView },
  { path: '/home', component: HomeView, meta: { requiresAuth: true } },
  { path: '/', redirect: '/login' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  // Verificamos si la ruta requiere autenticacion
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // Verificamos si el usuario esta autenticado
  const isAuthenticated = auth.currentUser;
  console.log(`Ruta: ${to.path}`);
  console.log(`Requiere autenticacion: ${requiresAuth}`);
  console.log(`Usuario autenticado: ${isAuthenticated ? 'Si' : 'No'}`);

  if (requiresAuth && !isAuthenticated) {
    // Si la ruta requiere autenticacion y el usuario no esta autenticado, redirigimos al login
    console.log('Redirigiendo a login');
    next('/login');
  } else {
    // En otro caso, permitimos la navegacion
    console.log('Permitiendo navegacion');
    next();
  }
});

export default router;
