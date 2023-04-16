<script setup lang="ts">
import TagComponent from './TagComponent.vue';

defineProps<{ thumbnail: string, spectators: string, channelIcon: string, name: string, channelName: string, activity: string, tags: string[] }>();

</script>

<template>
  <div>
    <img
      :src="thumbnail"
      class="h-48 w-96 aspect-video transition ease-in delay-50 hover:scale-105"
    >
    <div class="bg-red-600 text-xs rounded w-fit font-bold px-2 py-0.5 absolute top-1/2 mt-9 ml-2">AO VIVO</div>
    <div class="bg-zinc-900/50 text-xs rounded w-fit px-2 py-0.5 absolute top-1/2 mt-[calc(12rem_-_3px)] ml-2">{{ spectators }} espectadores</div>

    <div class="flex gap-2 mt-2">
      <img
        :src="channelIcon"
        class="h-12 rounded-full"
      >
      <div>
        <p class="text-sm font-semibold hover:text-violet-500">{{ name }}</p>
        <p class="text-xs text-zinc-400">{{ channelName }}</p>
        <p class="text-xs text-zinc-400 hover:text-violet-500">{{ activity }}</p>
        <TagComponent
          v-for="tag in tags"
          :key="tag"
          :tagName="tag"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
