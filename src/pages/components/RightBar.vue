<script setup lang="ts">
import { useCompStore } from '@/store/main';
import { ElLoading } from 'element-plus';
import { render } from './preview/render';

const compStore = useCompStore();
const handleClose = (done: () => void) => {
  done();
}


const tempComp = import.meta.glob('../../template/**.vue');
let temps = $ref<ITemp[]>();

temps = Object.keys(tempComp).map(path => {
  const strs = path.split('/');
  const name = strs[strs.length - 1].split('.')[0];
  return { name, cover: new URL(`../../assets/imgs/temp/${name.toLocaleLowerCase()}.jpeg`, import.meta.url).href, comp: tempComp[path] }
});

const handleChooseTemp = async (temp: ITemp) => {
  const loadingInstance = ElLoading.service({
    text: '模板加载中...',
    fullscreen: true,
  });
  const comp: any = await temp.comp();
  loadingInstance.close();
  compStore.currentTemplate = comp.default;
  compStore.currentTempType = temp.name;
  await nextTick();
  render();
  compStore.isShowRightBar = false;
}
</script>

<template>
  <div class="right-bar">
    <el-drawer
      size="510px"
      v-model="compStore.isShowRightBar"
      title="请挑选模板"
      direction="rtl"
      :before-close="handleClose"
    >
      <div class="temps">
        <div
          class="temp"
          v-for="(item, idx) in temps"
          :key="idx"
          :style="{ background: `url(${item.cover})`, backgroundSize: '100% 100%' }"
          @click="handleChooseTemp(item)"
        ></div>
      </div>
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>
.temps {
  display: flex;
  flex-wrap: wrap;
  .temp {
    width: 200px;
    height: 240px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 1rem;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    &:hover {
      border-color: #00a6a7;
      &::after {
        opacity: 1;
      }
    }
    &::after {
      content: '应用此模板';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #00a6a7;
      font-size: 20px;
      opacity: 0;
      transition: opacity .3s;
    }
  }
}
</style>