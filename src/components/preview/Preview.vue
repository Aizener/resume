<script setup lang="ts">
import { useMainStore, useCompStore } from '@/store/main';
import { doRender, cvsArr } from './render';
import { doScroll, currPage, isShowPage } from './scroll';

const mainStore = useMainStore();
const compStore = useCompStore();

watch(mainStore, () => {
  doRender();
});

onMounted(async () => {
  doRender();
});

const _doScroll = doScroll($$(cvsArr));
const handleScroll = (e: Event) => {
  _doScroll(e);
};
</script>

<template>
  <div class="preview" @scroll="handleScroll">
    <div id="temp-page" class="temp-page">
      <component :is="compStore.currentTemplate"></component>
    </div>
    <div id="pages" class="pages"></div>
    <Transition>
      <div v-show="isShowPage" class="page-num">{{ currPage }}</div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.preview {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100% - 1rem);
    background-color: #fff;
  }
  .page-num {
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    border-radius: .5rem;
    background-color: rgba(0, 0, 0, .8);
    position: fixed;
    bottom: 80px;
    right: 300px;
  }
  .pages {
    display: flex;
    flex-direction: column;
    position: relative;
    &:deep(canvas) {
      margin: 0 0 .5rem 0;
      padding: 1rem 0;
      background-color: #fff;
    }
  }
  .temp-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    overflow-y: auto;
    left: 0;
    top: 0;
    background-color: #fff;
    left: -10000%;
    top: -10000%;
  }
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
.v-enter-active, .v-leave-active {
  transition: all .5s;
}
</style>