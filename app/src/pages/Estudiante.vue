<template>
  <section class="min-h-screen bg-gradient-to-br from-yellow-100 via-teal-100 to-sky-100 p-6">
    <div class="max-w-5xl mx-auto space-y-6">

      <header class="bg-white rounded-2xl p-6 shadow flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-black text-emerald-700">Hola, {{ me?.nombre || 'Estudiante' }} 👋</h1>
          <p class="text-gray-600">Etapa <b>Brote (10–13)</b> • Monedas: <b>{{ coins }}</b></p>
        </div>
        <div class="text-sm text-gray-500">
          {{ me?.email }}
        </div>
      </header>

      <div class="grid md:grid-cols-4 gap-4">
        <StatCard label="Nivel" :value="level"><template #icon>🪴</template></StatCard>
        <StatCard label="Racha" :value="streak+' días'"><template #icon>🔥</template></StatCard>
        <StatCard label="Logros" :value="achievements+'/15'"><template #icon>🏆</template></StatCard>
        <div class="bg-white rounded-2xl p-6 shadow">
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-bold text-emerald-700">Progreso</h3>
            <span class="text-sm font-black text-emerald-700">{{ progress }}%</span>
          </div>
          <div class="h-3 bg-emerald-100 rounded">
            <div class="h-3 bg-emerald-500 rounded transition-all" :style="{width: progress+'%'}"></div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <ActivityCard
          title="Lección del día"
          subtitle="Planificación y consumo inteligente"
          :reward="20"
          @run="gain(20,5)"
        >
          <template #icon>📖</template>
        </ActivityCard>

        <ActivityCard
          title="Juego: Mi Kiosco"
          subtitle="Compra, vende y aprende a dar vuelto"
          :reward="30"
          @run="gain(30,7)"
        >
          <template #icon>🎮</template>
        </ActivityCard>

        <ActivityCard
          title="Quiz semanal"
          subtitle="Refuerza lo aprendido en Brote"
          :reward="50"
          @run="gain(50,10)"
        >
          <template #icon>❓</template>
        </ActivityCard>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useAuth } from '@/composables/useAuth'
import StatCard from '@/components/StatCard.vue'
import ActivityCard from '@/components/ActivityCard.vue'

const { me, updateMe } = useAuth()

// valores con defaults si aún no existen
const coins = computed(()=> me.value?.coins ?? 0)
const progress = computed(()=> me.value?.progress ?? 10)
const level = computed(()=> me.value?.level ?? 3)
const streak = computed(()=> me.value?.streak ?? 1)
const achievements = computed(()=> me.value?.achievements ?? 0)

function gain(mon, prog){
  if(!me.value) return
  const next = {
    coins: coins.value + mon,
    progress: Math.min(100, progress.value + prog),
  }
  // sube de nivel cada 100%
  if(next.progress===100){
    next.level = level.value + 1
    next.progress = 0
    next.achievements = achievements.value + 1
  }
  updateMe(next)
}

onMounted(()=>{
  // asegura campos esenciales
  if(me.value && me.value.etapa!=='Brote'){
    updateMe({ etapa:'Brote' })
  }
})
</script>
