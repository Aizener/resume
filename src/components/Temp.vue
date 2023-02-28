<script setup lang="ts">
import { useMainStore, useCompStore } from '@/store/main';
const mainStore = useMainStore();
const compStore = useCompStore();

const [
  workOrder,
  projectOrder,
  educationOrder,
  likeOrder,
  linkOrder
] = compStore.orderList;
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
    <slot></slot>
    <div class="row temp-info">
      <slot name="info" :data="baseInfo"></slot>
    </div>
    <div class="row temp-advantage">
      <slot name="advantage" :data="advantage"></slot>
    </div>
    <div class="row temp-work" :style="`order: ${workOrder}`">
      <slot name="work" :data="work"></slot>
    </div>
    <div class="row temp-project" :style="`order: ${projectOrder}`">
      <slot name="project" :data="project"></slot>
    </div>
    <div class="row temp-education" :style="`order: ${educationOrder}`">
      <slot name="education" :data="education"></slot>
    </div>
    <div class="row temp-like" :style="`order: ${likeOrder}`">
      <slot name="like" :data="like"></slot>
    </div>
    <div class="row temp-link" :style="`order: ${linkOrder}`">
      <slot name="link" :data="link"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.temp {
  width: 595px;
  padding: 1rem;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  box-shadow: 0 0 5px #ccc;
  font-family: "微软雅黑";
  & > div {
    width: 100%;
  }
}
</style>