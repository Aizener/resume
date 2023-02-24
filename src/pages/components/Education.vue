<script setup lang="ts">
import AddIcon from '~icons/material-symbols/add-circle';
import { useMainStore } from '@/store/main';
import Experience from './Experience.vue';
import { ElMessageBox } from 'element-plus';
import 'element-plus/es/components/message-box/style/css';

const mainStore = useMainStore();
const { education } = mainStore;

const handleAddEducation = () => {
  education.educations.push({
    name: '',
    role: '',
    grade: '初中及以下',
    educationDate: '',
    educationTime: '',
    content: '',
    contentArr: []
  });
}

const handleRemoveEducation = async (idx: number) => {
  const confirm = await ElMessageBox.confirm('你确定要删除该条记录吗？', '警告').catch(err => err);
  if (confirm === 'confirm') {
    education.educations.splice(idx, 1);
  }
}

</script>

<template>
  <div class="education">
    <h3>教育经历</h3>
    <div class="form">
      <div
        class="education-item"
        v-for="(item, idx) in education.educations"
        :key="idx"
      >
        <Experience
          :model="item"
          type="education"
          @onRemove="handleRemoveEducation(idx)"
        ></Experience>
      </div>
      <div class="add" @click="handleAddEducation">
        <AddIcon /><span>添加教育经历</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.education {
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