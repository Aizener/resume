<script setup lang="ts">
import BaseInfo from './components/BaseInfo.vue';
import Advantage from './components/Advantage.vue';
import Work from './components/Work.vue';
import Project from './components/Project.vue';
import Education from './components/Education.vue';
import Like from './components/Like.vue';
import Link from './components/Link.vue';
import Header from './components/Header.vue';
import RightBar from './components/RightBar.vue';
import Preview from './components/preview/Preview.vue';
import Sequence from './components/Sequence.vue';
import { useCompStore } from '@/store/main';

const compStore = useCompStore();

const [
  workOrder,
  projectOrder,
  educationOrder,
  likeOrder,
  linkOrder
] = compStore.orderList;
</script>

<template>
  <div class="design">
    <Header></Header>
    <Sequence></Sequence>
    <div class="design-left">
      <BaseInfo></BaseInfo>
      <Advantage></Advantage>
      <Work :style="`order: ${workOrder}`"></Work>
      <Project :style="`order: ${projectOrder}`"></Project>
      <Education :style="`order: ${educationOrder}`"></Education>
      <Like :style="`order: ${likeOrder}`"></Like>
      <Link :style="`order: ${linkOrder}`"></Link>
    </div>
    <div class="design-right">
      <Preview></Preview>
    </div>
  </div>
  <RightBar></RightBar>
</template>

<style lang="scss" scoped>
.design {
  display: flex;
  justify-content: space-between;
  &-left {
    width: calc(100% - 690px);
    padding: 3rem;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    &:deep(h3) {
      margin: 1rem 0;
    }
    &:deep(.el-form) {
      display: flex;
      flex-wrap: wrap;
      .el-form-item {
        margin-right: 2rem;
        flex-direction: column;
        align-items: flex-start;
        .el-input, .el-select, .el-date-editor, .el-input__wrapper {
          width: 240px !important;
        }
      }
    }
  }
  &-right {
    width: 690px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    padding: 5rem 3rem 3rem 3rem;
    background-color: #f2f5fa;
  }
}
</style>