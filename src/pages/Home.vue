<script setup lang="ts">
import GithubIcon from '~icons/ion/logo-github';
import CanvasNest from 'canvas-nest.js';

const router = useRouter();

const handleBeginDesign = () => {
  router.push('/design');
}
</script>

<template>
  <div class="home">
    <div class="home-title">
      <h2 class="title">一简</h2>
      <p class="subtitle">一个免费的在线简历生成工具</p>
    </div>
    <div class="btns">
      <el-button type="primary" @click="handleBeginDesign">立即开始&nbsp;>></el-button>
      <el-button type="info"><GithubIcon class="icon" />Github</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: #eef1f9;
  &-title {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
    .title {
      color: #333;
      font-size: 64px;
      font-family: cursive;
    }
    .subtitle {
      color: #999;
      font-size: 22px;
      margin-top: 1rem;
      letter-spacing: 6px;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .btns {
    margin-top: 3rem;
    .el-button {
      height: 50px;
      font-size: 20px;
      box-shadow: 0 5px 5px #ccc;
      .icon {
        margin-right: .5rem;
      }
    }
  }
}
</style>