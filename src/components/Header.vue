<script setup lang="ts">
import { save } from './preview/render';
import { useCompStore } from '@/store/main';

const compStore = useCompStore();

const handleDownload = () => {
  save();
}

const handleChoose = () => {
  compStore.isShowRightBar = true;
}
</script>

<template>
  <div class="header">
    <div class="left"></div>
    <div class="right">
      <el-button type="primary" @click="handleDownload">下载附件</el-button>
      <el-button type="warning" @click="handleChoose">模板选择</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 2;
  background-color: rgba(255, 255, 255, .7);
  border-bottom: 1px solid #eee;
}
</style>