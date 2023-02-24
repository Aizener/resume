<script setup lang="ts">
import { jsPDF } from 'jspdf';
import Base from '@/template/Base.vue';
import { useMainStore } from '@/store/main';
import { doRender, a4Width, a4Height, cvsArr } from './render';
import { doScroll, currPage, isShowPage } from './scroll';


const mainStore = useMainStore();
watch(mainStore, () => {
  doRender();
});

onMounted(async () => {
  doRender();
});

const handleDownload = () => {
  const doc = new jsPDF({
    unit: 'pt', // 单位用pt
    format: 'a4',
  });
  for (let i = 0 ; i < cvsArr.length ; i ++) {
    const page = cvsArr[i].toDataURL('image/jpeg', 1.0);
    doc.addImage(page, 'jpeg', 0, 0, a4Width, a4Height);
    i < cvsArr.length - 1 && doc.addPage();
  }
  doc.save();
}

const handleScroll = (e: Event) => {
  doScroll(cvsArr)(e);
};
</script>

<template>
  <div class="preview" @scroll="handleScroll">
    <div id="temp-page" class="temp-page">
      <component :is="Base"></component>
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