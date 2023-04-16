<script setup lang="ts">
import { MoreVertical, Search, Crown, User } from 'lucide-vue-next';

</script>

<template>
  <header class="h-12 bg-zinc-800 flex justify-between items-center px-4 drop-shadow-md">
    <div class="flex gap-9 items-center">
      <img
        src="/src/assets/logo.png"
        class="h-5 w-5"
      >
      <a
        href="#"
        class="font-semibold text-base hover:text-violet-400"
      >Procurar</a>
      <button class="hover:bg-zinc-700 rounded px-1 py-2"><MoreVertical :size="22" /></button>
    </div>
    <form class="flex">
      <input
        placeholder="Buscar"
        class="h-10 w-96 rounded bg-zinc-600 p-2 hover:bg-zinc-600/70"
      >
      <button
        class="bg-zinc-700 h-10 rounded-r ml-0.5 p-1 cursor-not-allowed"
        disabled
      >
        <Search :size="22" />
      </button>
    </form>

    <div class="flex gap-3 items-center">
      <button class="p-1 rounded hover:bg-zinc-700">
        <Crown :size="22" />
      </button>
      <div class="flex gap-2 text-xs font-semibold">
        <button class="bg-zinc-700 rounded px-2 py-1 hover:bg-zinc-700/80">
          Entrar
        </button>
        <button class="bg-violet-700 rounded px-2 py-1 hover:bg-violet-700/80">
          Cadastrar-se
        </button>
      </div>
      <button class="p-1 rounded hover:bg-zinc-700">
        <User :size="22" />
      </button>
    </div>
  </header>
</template>

<style></style>
