<template>
  <section class="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-cyan-50 py-10">
    <div class="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8">
      <h1 class="text-3xl font-black text-emerald-700">Crear cuenta</h1>
      <p class="text-gray-600 mt-1">Etapa <span class="font-semibold">Brote (10–13)</span></p>

      <form class="mt-6 space-y-4" @submit.prevent="onSubmit">
        <div>
          <label class="block text-sm font-semibold text-gray-700">Edad (6–17)</label>
          <input v-model.number="form.edad" type="number" min="6" max="17"
                class="mt-1 w-full rounded-xl border p-3 focus:ring-2 focus:ring-emerald-400" required>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700">Nombre</label>
          <input v-model.trim="form.nombre" type="text" class="mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" required>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700">Correo</label>
          <input v-model.trim="form.email" type="email" class="mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" required>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700">Contraseña</label>
          <input v-model="form.password" :type="show?'text':'password'" class="mt-1 w-full rounded-xl border p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-emerald-400" required minlength="6">
          <button type="button" class="mt-2 text-xs text-emerald-700 underline" @click="show=!show">{{ show?'Ocultar':'Mostrar' }}</button>
        </div>

        <div>
          <span class="block text-sm font-semibold text-gray-700 mb-2">Rol</span>
          <div class="grid grid-cols-2 gap-3">
            <button type="button" :class="card('Estudiante')" @click="form.rol='Estudiante'">👩‍🎓 Estudiante</button>
            <button type="button" :class="card('Docente')" @click="form.rol='Docente'">👨‍🏫 Docente</button>
          </div>
        </div>

        <p v-if="error" class="text-red-600 text-sm">{{ error }}</p>

        <button class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-full transition">
          Registrarme
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-6">
        ¿Ya tienes cuenta?
        <RouterLink to="/login" class="text-emerald-700 font-semibold underline">Inicia sesión</RouterLink>
      </p>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const form = reactive({ nombre:'', email:'', password:'', rol:'Estudiante', edad: null })
const show = ref(false)
const error = ref('')

function card(nombre){
  return [
    'rounded-xl border p-4 text-left hover:shadow-md transition',
    form.rol===nombre ? 'border-emerald-500 ring-2 ring-emerald-300 bg-emerald-50' : 'border-gray-200 bg-white'
  ].join(' ')
}

function onSubmit(){
  error.value=''
  const okEmail = /\S+@\S+\.\S+/.test(form.email)
  if(!(form.edad>=6 && form.edad<=17)){ error.value='La edad debe estar entre 6 y 17'; return }
  if(!okEmail){ error.value='Correo inválido'; return }
  if(form.password.length<6){ error.value='Mínimo 6 caracteres'; return }

  // mock local hasta conectar Azure
  const users = JSON.parse(localStorage.getItem('rq_users')||'[]')
  if(users.some(u=>u.email===form.email)){ error.value='Ese correo ya existe'; return }
  users.push({ id:crypto.randomUUID(), ...form, etapa:'Brote', createdAt:Date.now() })
  localStorage.setItem('rq_users', JSON.stringify(users))
  localStorage.setItem('rq_auth', JSON.stringify({ email:form.email }))
  router.push('/estudiante')
}
</script>
