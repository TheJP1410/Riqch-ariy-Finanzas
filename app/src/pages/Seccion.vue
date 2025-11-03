<template>
  <section class="min-h-screen grid place-items-center bg-gradient-to-br from-amber-50 via-emerald-50 to-cyan-50 p-6">
    <div class="w-full max-w-md bg-white/90 rounded-2xl shadow-xl p-8">
      <h1 class="text-2xl font-black text-emerald-700">Iniciar sesión</h1>
      <form class="mt-6 space-y-4" @submit.prevent="onLogin">
        <div>
          <label class="block text-sm font-semibold">Correo</label>
          <input v-model.trim="email" type="email" class="mt-1 w-full rounded-xl border p-3 focus:ring-2 focus:ring-emerald-400" required>
        </div>
        <div>
          <label class="block text-sm font-semibold">Contraseña</label>
          <input v-model="password" type="password" class="mt-1 w-full rounded-xl border p-3 focus:ring-2 focus:ring-emerald-400" required>
        </div>
        <p v-if="err" class="text-red-600 text-sm">{{ err }}</p>
        <button class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-full">Entrar</button>
      </form>
      <p class="text-sm text-gray-600 mt-4">
        ¿No tienes cuenta?
        <RouterLink to="/registro" class="text-emerald-700 font-semibold underline">Regístrate</RouterLink>
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const email = ref(''); const password = ref(''); const err = ref('')
function onLogin(){
  err.value=''
  const users = JSON.parse(localStorage.getItem('rq_users')||'[]')
  const u = users.find(x=>x.email===email.value && x.password===password.value)
  if(!u){ err.value='Credenciales inválidas'; return }
  localStorage.setItem('rq_auth', JSON.stringify({ email:u.email }))
  router.push('/estudiante')
}
</script>
