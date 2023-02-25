<script setup lang="ts">
import AddIcon from '~icons/material-symbols/add-circle';
import { useMainStore } from '@/store/main';
import Experience from './Experience.vue';
import { ElMessageBox } from 'element-plus';

const mainStore = useMainStore();
const { work } = mainStore;

const handleAddWork = () => {
  work.works.push({
    name: '',
    workDate: '',
    workTime: '',
    job: '',
    content: '',
    contentArr: [],
    result: ''
  });
}

const handleRemoveWork = async (idx: number) => {
  const confirm = await ElMessageBox.confirm('你确定要删除该条记录吗？', '警告').catch(err => err);
  if (confirm === 'confirm') {
    work.works.splice(idx, 1);
  }
}

</script>

<template>
  <div class="work">
    <h3>工作经历</h3>
    <div class="form">
      <div
        class="work-item"
        v-for="(item, idx) in work.works"
        :key="idx"
      >
        <Experience
          :model="item"
          type="work"
          @onRemove="handleRemoveWork(idx)"
        ></Experience>
      </div>
      <div class="add" @click="handleAddWork">
        <AddIcon /><span>添加工作经历</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work {
  &-item {
    margin-bottom: 1rem;
  }
  .add {
    color: #00a6a7;
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin-left: .5rem;
    }
  }
}
</style>