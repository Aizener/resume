<script setup lang="ts">
import GithubIcon from '~icons/ion/logo-github';
import CanvasNest from 'canvas-nest.js';

const router = useRouter();

const handleBeginDesign = () => {
  router.push('/design');
}

onMounted(() => {
  const config: Record<string, unknown> = {
    color: '0,0,0',
    count: 100,
    zIndex: 1
  }
  new CanvasNest(document.querySelector('.home'), config);
});
</script>

<template>
  <div class="home">
    <header>
      <div class="logo">YiJian</div>
      <div class="menu">
        <router-link class="link" to="/">模板广场</router-link>
        <router-link class="link" to="/">我的简历</router-link>
        <router-link class="link" to="/">模板创建</router-link>
      </div>
    </header>
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
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: #eef1f9;
  header {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    background-color: rgba(255, 255, 255, .8);
    box-shadow: 0 3px 12px rgb(98 107 181 / 25%);
    .logo {
      font-size: 36px;
      font-family: fantasy;
      text-shadow: 3px 3px 2px #666;
    }
    .menu {
      .link {
        color: #333;
        font-size: 18px;
        margin-right: 2rem;
        text-decoration: none;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          color: #4d85ff;
        }
      }
    }
  }
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