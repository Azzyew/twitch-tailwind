<script setup lang="ts">
defineProps<{ imgSrc: string, channelName: string, activity: string, viewers: string }>();

</script>

<template>
  <div class="flex items-center justify-between mb-1 px-3 py-0.5 hover:bg-zinc-700/40">
    <div class="flex gap-2">
      <img 
        :src="imgSrc"
        class="rounded-full h-8"
      >
      <div>
        <p class="text-sm">
          {{ channelName }}
        </p>
        <p class="text-zinc-400 text-xs">
          {{ activity }}
        </p>
      </div>
    </div>
    <div class="flex items-center gap-1 -mt-4">
      <div class="h-2 w-2 bg-red-500 rounded-full" />
      <span class="text-xs">{{ viewers }}</span>
    </div>
  </div>
</template>

<style></style>
