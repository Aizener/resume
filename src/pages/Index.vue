<script setup lang="ts">
import CanvasNest from 'canvas-nest.js';
import MenuIcon from '~icons/gg/menu-grid-r';
import { useGlobalStore } from '@/store/main';
import { useMobileHeaderFn } from '@/utils/mobile';

const route = useRoute();
const globalStore = useGlobalStore();
const { isShow, handleChangeShow } = useMobileHeaderFn();

onMounted(() => {
  const config: Record<string, unknown> = {
    color: '0,0,0',
    count: globalStore.isMobile ? 30 : 100,
    zIndex: 1
  }

  new CanvasNest(document.querySelector('.index'), config);
});

</script>

<template>
  <div class="index">
    <header class="index-header">
      <div class="logo">YiJian</div>
      <div class="menu" v-if="globalStore.isMobile">
        <MenuIcon class="menu-icon" @click="handleChangeShow(!isShow)"></MenuIcon>
        <Transition name="toggle">
          <div class="menu-list" v-show="isShow">
            <router-link class="link" :class="{ active: route.path === '/home' }" to="/">首页</router-link>
            <router-link class="link" :class="{ active: route.path === '/mall' }" to="/mall">模板广场</router-link>
            <router-link class="link" :class="{ active: route.path === '/my' }" to="/my">我的简历</router-link>
            <a class="link" href="https://github.com/Aizener/resume/tree/master#%E6%A8%A1%E6%9D%BF%E5%88%9B%E5%BB%BA" target="_blank">模板创建</a>
          </div>
        </Transition>
      </div>
      <div class="menu" v-else>
        <router-link class="link" :class="{ active: route.path === '/home' }" to="/">首页</router-link>
        <router-link class="link" :class="{ active: route.path === '/mall' }" to="/mall">模板广场</router-link>
        <router-link class="link" :class="{ active: route.path === '/my' }" to="/my">我的简历</router-link>
        <a class="link" href="https://github.com/Aizener/resume/tree/master#%E6%A8%A1%E6%9D%BF%E5%88%9B%E5%BB%BA" target="_blank">模板创建</a>
      </div>
    </header>
    <div class="container">
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #eef1f9;
  padding-top: 76px;
  header {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    z-index: 10;
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
        &.active {
          color: #4d85ff;
        }
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          color: #4d85ff;
        }
      }
    }
  }
  .container {
    flex: 1;
    display: flex;
  }
}

.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: scaleX(80%);
}
.v-enter-to, .v-leave-from {
  opacity: 1;
}

.v-enter-active {
  transition: all .5s;
}
.v-leave-active {
  opacity: 0;
  position: absolute !important;
}

.toggle-enter-from, .toggle-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.toggle-enter-active, .toggle-leave-active {
  transition: all .5s;
}
</style>