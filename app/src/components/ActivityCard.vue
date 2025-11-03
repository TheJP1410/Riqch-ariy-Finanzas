<template>
  <button class="bg-white rounded-2xl p-5 text-left shadow hover:shadow-lg transition w-full"
          @click="$emit('run')">
    <div class="text-2xl mb-1"><slot name="icon">🕹️</slot></div>
    <h3 class="font-bold text-emerald-700">{{ title }}</h3>
    <p class="text-gray-600 text-sm">{{ subtitle }}</p>
    <div class="mt-2 text-amber-600 text-sm font-semibold">+{{ reward }} monedas</div>
  </button>
</template>
<script setup>
defineProps({ title:String, subtitle:String, reward:{type:Number,default:10} })
</script>
