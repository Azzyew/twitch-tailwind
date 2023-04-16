<script setup lang="ts">
import { ref } from 'vue';
import { NCarousel, NCarouselItem } from 'naive-ui';

const images = ref([
  'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
]);
</script>
<template>
  <NCarousel
    effect="card"
    prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
    next-slide-style="transform: translateX(50%) translateZ(-800px);"
    class="px-56 py-12"
    :show-dots="false"
    :show-arrow="true"
  >
    <NCarouselItem
      v-for="image in images"
      :key="image"
      :style="{ width: '60%' }"
    >
      <img
        class="h-full w-full m-0 object-cover transition ease-in delay-50 hover:scale-105"
        :src="image"
      >
      <div class="bg-red-600 text-xs rounded w-fit font-bold px-2 py-0.5 absolute top-2 ml-2">AO VIVO</div>
    </NCarouselItem>
  </NCarousel>
</template>
<style scoped>
:deep(.n-carousel__arrow-group) {
  display: flex;
  justify-content: space-between;
  width: 82vw;
}

:deep(.n-carousel__arrow) {
  background: none;
  margin-top: -200px;
}

:deep(.n-carousel__arrow):hover {
  background: #52525b;
}
</style>
