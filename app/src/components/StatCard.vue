<template>
  <div class="bg-white rounded-2xl p-6 shadow hover:shadow-md transition">
    <div class="text-3xl mb-2"><slot name="icon">🎯</slot></div>
    <div class="text-sm text-gray-500 font-semibold">{{ label }}</div>
    <div class="text-2xl font-black text-emerald-700">{{ value }}</div>
  </div>
</template>
<script setup>
defineProps({ label:String, value:[String,Number] })
</script>
