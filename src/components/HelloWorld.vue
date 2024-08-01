<template>
  <div>
    <Menubar :model="dItems" class="custom-menubar" />

    <div>
      <h1>Datos desde MariaDB</h1>
      <ul>
        <li v-for="dato in datos" :key="dato.id">{{ dato.NOMBRE }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Menubar from 'primevue/menubar';

export default {
  components: {
    Menubar
  },
  data() {
    return {
      datos: [],
      dItems: [
        {
          label: 'Crear Ficha',
          icon: 'pi pi-home'
        },
        {
          label: 'Editar',
          icon: 'pi pi-file-edit'
        },
        {
          label: 'Borrar',
          icon: 'pi pi-shopping-cart'
        },
        {
          label: 'Consultar',
          icon: 'pi pi-shopping-cart'
        }      ]
    };
  },
  created() {
    this.obtenerDatos();
  },
  methods: {
    async obtenerDatos() {
      try {
        const response = await axios.get('http://localhost:3000/datos');
        this.datos = response.data;
      } catch (error) {
        console.error('Error obteniendo los datos:', error);
      }
    }
  }
};
</script>

<style>
/* Agrega tus estilos personalizados aquí */
.custom-menubar {
  margin-bottom: 20px; /* Espacio entre la barra de menú y el contenido */
}
</style>
