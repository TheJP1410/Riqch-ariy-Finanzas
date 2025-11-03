<template>
  <section class="min-h-screen bg-gradient-to-br from-yellow-100 via-teal-100 to-sky-100 flex flex-col items-center">
    <header class="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-lime-400 text-white text-center py-6 shadow-lg">
      <h1 class="text-4xl font-extrabold tracking-tight">Riqch’ariy Finanzas</h1>
      <p class="text-lg font-medium mt-2">Educación financiera divertida para niños y adolescentes (6–17 años)</p>
    </header>

    <main class="flex-1 w-full max-w-5xl mx-auto px-6 py-12">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-3xl font-bold text-emerald-700 mb-4">🌱 Etapa Brote (10–13 años)</h2>
          <p class="text-gray-700 leading-relaxed">
            En esta etapa, los estudiantes aprenden a gestionar su dinero de manera responsable mediante juegos y retos
            interactivos. Descubren conceptos como ahorro, planificación y consumo inteligente.
          </p>
          <div class="mt-6 flex gap-4">
            <RouterLink
              to="/registro"
              class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
            >
              ¡Empieza ahora!
            </RouterLink>
            <RouterLink
              to="/login"
              class="bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold py-3 px-6 rounded-full shadow-md transition"
            >
              Inicia sesión
            </RouterLink>
          </div>
        </div>

        <div class="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4149/4149726.png"
            alt="Educación financiera"
            class="w-72 md:w-96 drop-shadow-lg"
          />
        </div>
      </div>
    </main>

    <footer class="w-full bg-emerald-700 text-white text-center py-4 text-sm">
      © 2025 Riqch’ariy Finanzas — Aprender, ahorrar y crecer juntos.
    </footer>
  </section>
</template>
