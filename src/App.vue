<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core';
import { useGlobalStore } from './store/main';

const breakpoints = useBreakpoints({
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
});

window.addEventListener('resize', () => {
  const globalStore = useGlobalStore();
  globalStore.isMobile = window.innerWidth < 640;
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="scss">
</style>
