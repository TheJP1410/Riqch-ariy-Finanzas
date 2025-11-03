<template>
  <header class="p-4 flex items-center gap-4 bg-white/60 backdrop-blur shadow">
    <h1 class="text-xl font-bold text-emerald-700">Riqch’ariy Finanzas</h1>
    <nav class="ml-6 flex gap-4 text-sm">
      <RouterLink :class="link('/')" to="/">Inicio</RouterLink>
      <RouterLink :class="link('/registro')" to="/registro">Registro</RouterLink>
      <RouterLink :class="link('/login')" to="/login">Login</RouterLink>
      <RouterLink :class="link('/estudiante')" to="/estudiante">Estudiante</RouterLink>
    </nav>
    <div class="ml-auto flex items-center gap-3">
      <span v-if="auth" class="text-gray-700 hidden sm:inline">👤 {{ auth.email }}</span>
      <button v-if="auth" class="text-red-600 hover:underline" @click="$emit('logout')">Salir</button>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
const props = defineProps({ auth: Object })
const route = useRoute()
const link = (p)=> route.path===p
  ? 'text-emerald-900 font-semibold underline'
  : 'text-emerald-700 hover:underline'
</script>
