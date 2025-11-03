<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import AppHeader from '@/components/AppHeader.vue'

const router = useRouter()
const auth = computed(()=> JSON.parse(localStorage.getItem('rq_auth')||'null'))
function logout(){ localStorage.removeItem('rq_auth'); router.push('/login') }
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-cyan-50">
    <AppHeader :auth="auth" @logout="logout" />
    <main class="p-6"><RouterView/></main>
  </div>
</template>
