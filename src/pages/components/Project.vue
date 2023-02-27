<script setup lang="ts">
import AddIcon from '~icons/material-symbols/add-circle';
import { useMainStore, usePersonalStore } from '@/store/main';
import Experience from './Experience.vue';
import { ElMessageBox } from 'element-plus';
import 'element-plus/es/components/message-box/style/css';

const mainStore = useMainStore();
const { project } = mainStore;

const handleAddProject = () => {
  project.projects.push({
    name: '',
    role: '',
    projectDate: '',
    projectTime: '',
    desc: '',
    descArr: []
  });
}

const handleRemoveProject = async (idx: number) => {
  const confirm = await ElMessageBox.confirm('你确定要删除该条记录吗？', '警告').catch(err => err);
  if (confirm === 'confirm') {
    project.projects.splice(idx, 1);
  }
}

</script>

<template>
  <div class="project">
    <h3>项目经历</h3>
    <div class="form">
      <div
        class="project-item"
        v-for="(item, idx) in project.projects"
        :key="idx"
      >
        <Experience
          :model="item"
          type="project"
          @onRemove="handleRemoveProject(idx)"
        ></Experience>
      </div>
      <div class="add" @click="handleAddProject">
        <AddIcon /><span>添加项目经历</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project {
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