<script setup lang="ts">
import { useMainStore } from '@/store/main';
const mainStore = useMainStore();

const {
  baseInfo,
  advantage,
  work,
  project,
  education,
  like,
  link
} = mainStore;
</script>

<template>
  <div id="temp" class="temp">
    <div class="row temp-info">
      <slot name="info" :data="baseInfo"></slot>
    </div>
    <div class="row temp-advantage">
      <slot name="advantage" :data="advantage"></slot>
    </div>
    <div class="row temp-work">
      <slot name="work" :data="work"></slot>
    </div>
    <div class="row temp-project">
      <slot name="project" :data="project"></slot>
    </div>
    <div class="row temp-education">
      <slot name="education" :data="education"></slot>
    </div>
    <div class="row temp-like">
      <slot name="like" :data="like"></slot>
    </div>
    <div class="row temp-link">
      <slot name="link" :data="link"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.temp {
  width: 595px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px #ccc;
  & > div {
    width: 100%;
  }
}
</style>