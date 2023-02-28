<script setup lang="ts">
import ListIcon from '~icons/material-symbols/format-list-numbered';
import DragIcon from '~icons/material-symbols/drag-pan-rounded';
import CloseIcon from '~icons/material-symbols/left-panel-close-outline';
import Draggable from 'vuedraggable';
import { useCompStore } from '@/store/main';
import { render } from './preview/render';

const compStore = useCompStore();
const list = $ref([
  { id: 0, title: '工作经历' },
  { id: 1, title: '项目经历' },
  { id: 2, title: '教育经历' },
  { id: 3, title: '个人兴趣' },
  { id: 4, title: '个人链接' }
]);
const isDrag = $ref(false);
const isToggle = $ref(false);
watch(() => list, async val => {
  val.forEach((item, idx) => {
    const id = item.id;
    compStore.orderList[id].value = idx;    
  });
  await nextTick();
  render();
});
</script>

<template>
  <div
    class="sequence"
    :class="{ active: isToggle }"
    @click.stop="isToggle = true"
   >
    <ListIcon class="icon" />
    <div class="list" v-show="isToggle">
      <Draggable
        v-model="list" 
        @start="isDrag = true" 
        @end="isDrag = false" 
        ghost-class="ghost"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="drag-item">
            <span>{{ element.title }}</span>
            <DragIcon class="drag-icon" />
          </div>
        </template>
      </Draggable>
    </div>
    <div
      class="right"
      v-show="isToggle"
      @click.stop="isToggle = false"
    >
      <CloseIcon class="right-icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sequence {
  position: fixed;
  left: 0;
  top: 100px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  background-color: #409eff;
  box-shadow: 0 0 5px #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s;
  z-index: 2;
  &.active {
    width: 180px;
    height: 180px;
    background-color: #fff;
    .icon {
      display: none;
    }
  }
  .icon {
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
  .list {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    .drag-item {
      width: 100%;
      color: #333;
      padding: 5px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: grab;
      &.ghost {
        color: #fff;
        opacity: 0.5;
        background: #409eff;
      }
      .drag-icon {
        color: #333;
        margin-right: .5rem;
      }
    }
  }
  .right {
    height: 100%;
    border-left: 1px solid #eee;
    padding: 0 5px;
    display: flex;
    align-items: center;
    background-color: #409eff;
    cursor: pointer;
    &-icon {
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>