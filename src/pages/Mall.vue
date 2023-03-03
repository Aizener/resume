<script setup lang="ts">
import { useCompStore, useMainStore } from '@/store/main';

const router = useRouter();
const mainStore = useMainStore();
const compStore = useCompStore();
const types = $ref([
  { title: '全部', value: '全部' },
  { title: '纯色', value: '纯色' },
  { title: '简约', value: '简约' },
]);
const type = $ref('全部');
const goods: ITempType[] = [
  { title: '基础模板', name: 'base', type: '纯色', comp: () => import('@/template/Base.vue'), cover: new URL('../assets/imgs/temp/base.jpeg', import.meta.url).href },
  { title: '绿色简约', name: 'brief', type: '简约', comp: () => import('@/template/Brief.vue'), cover: new URL('../assets/imgs/temp/brief.jpeg', import.meta.url).href },
  { title: '淡雅质量', name: 'senior', type: '简约', comp: () => import('@/template/Senior.vue'), cover: new URL('../assets/imgs/temp/senior.jpeg', import.meta.url).href },
  { title: '深色简洁', name: 'dark', type: '纯色', comp: () => import('@/template/Dark.vue'), cover: new URL('../assets/imgs/temp/dark.jpeg', import.meta.url).href },
];

const list = computed(() => {
  if (type === '全部') {
    return goods; 
  }
  return goods.filter(item => item.type === type);
});

const handleDesign = async (item: ITempType) => {
  mainStore.initData();
  compStore.currentTempType = item.name;
  const temp: any = await item.comp();
  compStore.currentTemplate = temp.default;
  router.push('/design');
}
</script>

<template>
  <div class="mall">
    <div class="top">
      <div class="limit">
        <span>类型：</span>
        <div class="types">
          <div
            class="type"
            :class="{ active: type === item.value }"
            v-for="(item, idx) in types"
            :key="idx"
            @click="type = item.value"
          >{{  item.title }}</div>
        </div>
      </div>
      <div class="limit">
        <span>价格：</span>
        <div class="types">
          <div class="type active">免费</div>
        </div>
      </div>
    </div>

    <TransitionGroup name="list" class="list" tag="div">
      <div
        class="item"
        v-for="item in list"
        :key="item.name"
      >
        <el-image class="cover" :src="item.cover" lazy />
        <div class="inner">
          <el-button type="primary" @click="handleDesign(item)">开始制作</el-button>
        </div>
        <div class="name">{{ item.title }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
.mall {
  width: 1128px;
  margin: 2rem auto;
  color: #333;
  z-index: 3;
  position: relative;
  .top {
    padding: 1rem;
    border-radius: .5rem;
    background-color: #fff;
  }
  .limit {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    &:first-child {
      margin-top: 0;
    }
    .types {
      display: flex;
      .type {
        margin: 0 .5rem;
        padding: 5px 10px;
        border-radius: 3px;
        cursor: pointer;
        &.active {
          color: #fff;
          background-color: #4d85ff;
        }
      }
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    .item {
      width: 200px;
      height: 250px;
      border: 1px solid #eee;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
      margin: 1rem 2rem 1rem 0;
      &:nth-child(5n) {
        margin-right: 0;
      }
      &:hover {
        .inner {
          bottom: 0;
        }
      }
      .cover {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .name {
        width: 100%;
        color: #333;
        font-size: 14px;
        text-align: center;
        position: absolute;
        left: 0;
        bottom: 0;
        text-align: center;
        z-index: 1;
        padding: 10px 10px;
        background: linear-gradient(to bottom, #fff, #ccc);
      }
      .inner {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: -100%;
        overflow: hidden;
        background-color: rgba(0, 0, 0, .7);
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .3s;
      }
    }
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-to  {
  opacity: 0;
  transform: scaleX(0);
}

.list-leave-active {
  position: absolute !important;
}
</style>