<script setup lang="ts">
import { save } from '../../components/preview/render';
import { useCompStore } from '@/store/main';
import BackIcon from '~icons/material-symbols/arrow-back-ios-rounded';

const compStore = useCompStore();
const router = useRouter();

const handleDownload = () => {
  save();
}

const handleBackHome = () => {
  router.replace('/');
}

const handleChoose = () => {
  compStore.isShowRightBar = true;
}
</script>

<template>
  <div class="header">
    <div class="left">
      <span class="left-back" @click="handleBackHome">
        <BackIcon class="icon" />返回首页
      </span>
    </div>
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
  .left-back {
    color: gray;
    display: flex;
    align-items: center;
    cursor: pointer;
    .icon {
      font-size: 11px;
    }
  }
}
</style>