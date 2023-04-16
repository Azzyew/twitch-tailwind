<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import ChannelRecommendation from './ChannelRecommendation.vue';

</script>

<template>
  <aside class="bg-zinc-800/80 w-64 h-[calc(100vh_-_7rem)]">
    <div class="flex justify-around items-center py-2">
      <span class="text-xs font-semibold">
        CANAIS RECOMENDADOS
      </span>
      <button class="p-0.5 rounded hover:bg-zinc-700">
        <ArrowLeft :size="22" />
      </button>
    </div>
    <div class="flex flex-col">
      <ChannelRecommendation
        imgSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-70x70.png"
        channelName="Gaules"
        activity="Project Zomboid"
        viewers="3,3 mil"
      />
      <ChannelRecommendation
        imgSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/e4cf03c9-ca69-4399-8cbc-f61088cf1d7d-profile_image-70x70.png"
        channelName="Baiano"
        activity="League of Legends"
        viewers="677"
      />
      <ChannelRecommendation
        imgSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/8e62dd94-b683-4bb0-978b-de6dc5375dd4-profile_image-70x70.png"
        channelName="ale_apoka"
        activity="Counter-Strike: Glo..."
        viewers="259"
      />
      <ChannelRecommendation
        imgSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/dfb0cef3-87ca-4f09-9f52-7d7de319afbb-profile_image-70x70.png"
        channelName="mch_AGG"
        activity="VALORANT"
        viewers="260"
      />
      <ChannelRecommendation
        imgSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/a2e6baca-7218-4c55-b390-12bfaf3ddd9a-profile_image-70x70.png"
        channelName="blackoutz"
        activity="Fortnite"
        viewers="610"
      />
      <ChannelRecommendation
        imgSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/a255c64a-3c82-41d7-ae38-e2aea87882da-profile_image-70x70.png"
        channelName="StolenBR"
        activity="Escape from Tarkov"
        viewers="1,2 mil"
      />
    </div>
  </aside>
</template>

<style></style>
