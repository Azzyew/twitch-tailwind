<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import LiveRecommendation from './components/LiveRecommendation.vue';
import { ChevronDown } from 'lucide-vue-next';
import CarouselComponent from './components/CarouselComponent.vue';

</script>

<template>
  <div class="bg-zinc-900 text-white h-[calc(100vh_-_4rem)]">
    <HeaderComponent />
    <div class="flex">
      <SidebarComponent />
    
      <div class="px-8">
        <div class="h-[calc((100vh_-_7rem)_/_2)]">
          <CarouselComponent />
        </div>
        <div class="text-lg tracking-wide">
          <a
            href="#"
            class="text-violet-400 hover:underline"
          >Canais ao vivo</a>
          <span> que achamos que você vai gostar</span>
          
          <div class="flex gap-4 pt-2">
            <LiveRecommendation
              thumbnail="https://sm.ign.com/t/ign_br/screenshot/a/a-gameplay/a-gameplay-screenshot-of-from-valorants-closed-beta_z548.1080.jpg"
              spectators="3,3 mil"
              channelIcon="https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-70x70.png"
              name="Valorant rumo ao ouro - !Sorteio"
              channelName="Gaules"
              activity="VALORANT"
              :tags="['fps', 'VALORANT', 'Português']"
            />

            <LiveRecommendation
              thumbnail="https://leaguefeed.net/wp-content/uploads/2022/05/how-to-take-screenshots-in-league-of-legends.jpg"
              spectators="677"
              channelIcon="https://static-cdn.jtvnw.net/jtv_user_pictures/e4cf03c9-ca69-4399-8cbc-f61088cf1d7d-profile_image-70x70.png"
              name="Valorant rumo ao desafiante - !Sorteio"
              channelName="Baiano"
              activity="League of Legends"
              :tags="['Português', 'DDC', 'CBLOL']"
            />

            <LiveRecommendation
              thumbnail="https://sm.ign.com/t/ign_br/screenshot/a/a-gameplay/a-gameplay-screenshot-of-from-valorants-closed-beta_z548.1080.jpg"
              spectators="3,3 mil"
              channelIcon="https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-70x70.png"
              name="Valorant rumo ao ouro - !Sorteio"
              channelName="Gaules"
              activity="Valorant"
              :tags="['fps', 'Valorant', 'Português']"
            />

            <LiveRecommendation
              thumbnail="https://leaguefeed.net/wp-content/uploads/2022/05/how-to-take-screenshots-in-league-of-legends.jpg"
              spectators="677"
              channelIcon="https://static-cdn.jtvnw.net/jtv_user_pictures/e4cf03c9-ca69-4399-8cbc-f61088cf1d7d-profile_image-70x70.png"
              name="Valorant rumo ao desafiante - !Sorteio"
              channelName="Baiano"
              activity="League of Legends"
              :tags="['Português', 'DDC', 'CBLOL']"
            />
          </div>
          <hr class="border-t-zinc-700 mt-8">
          <button class="flex gap-1 text-violet-400 text-xs items-center bg-zinc-900 p-2 rounded -mt-5 ml-[calc((100vw_-_30rem)_/_2)] hover:bg-zinc-600 hover:text-white">Mostrar mais <ChevronDown /></button>
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

<style></style>
