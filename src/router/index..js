// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

// Define las rutas
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

// Crea una instancia del router
const router = createRouter({
  history: createWebHistory(), // Utiliza el modo history para URL limpias
  routes
});

export default router;
