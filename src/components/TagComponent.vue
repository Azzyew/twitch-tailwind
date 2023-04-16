<script setup lang="ts">
defineProps<{ tagName: string }>();

</script>

<template>
  <button class="bg-zinc-800 rounded-full px-2 py-0.5 text-xxs text-zinc-300 mr-1 hover:bg-zinc-700">
    {{ tagName }}
  </button>
</template>

<style></style>
