<script setup lang="ts">
import { save } from '../../components/preview/render';
import { useCompStore, useMainStore, usePersonalStore } from '@/store/main';
import BackIcon from '~icons/material-symbols/arrow-back-ios-rounded';
import EditIcon from '~icons/material-symbols/edit-note';
import { ElMessageBox, ElNotification, ElMessage } from 'element-plus';
import { clone } from '@/utils/hooks';

const compStore = useCompStore();
const mainStore = useMainStore();
const personalStore = usePersonalStore();
const router = useRouter();
const route = useRoute();

const handleDownload = () => {
  save();
}

const handleBackHome = () => {
  router.replace('/');
}

const handleChoose = () => {
  compStore.isShowRightBar = true;
}

const covers: Record<string, string> = {
  'base': new URL('../../assets/imgs/temp/base.jpeg', import.meta.url).href,
  'brief': new URL('../../assets/imgs/temp/base.jpeg', import.meta.url).href
}
const handleSave = () => {
  if (name === '') {
    ElNotification({
      title: '警告',
      message: '请先设置简历名称后，再进行保存！',
      type: 'warning',
    });
  }
  const {
    baseInfo,
    advantage,
    work,
    project,
    education,
    like,
    link
  } = mainStore;
  personalStore.myTemps[name] = {
    data: {
      baseInfo: clone(baseInfo),
      advantage: clone(advantage),
      work: clone(work),
      project: clone(project),
      education: clone(education),
      like: clone(like),
      link: clone(link)
    },
    name: name,
    cover: covers[compStore.currentTempType],
    time: Date.now()
  }
  ElMessage({
    message: '保存成功！',
    type: 'success',
  });
}

let name = $ref(route.query.name ? route.query.name as string : '');
const handleEditName = async () => {
  const res = await ElMessageBox.prompt('请输入简历名称', '请填写', {
    inputValue: name,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    inputValidator: (str: string) => {
      return str.length >= 2 && str.length <= 10;
    } ,
    inputPlaceholder: '请输入简历名称',
    inputErrorMessage: '请输入2到10位长度的名称',
  }).catch(err => err);
  if (res.action === 'confirm') {
    if (Object.keys(personalStore.myTemps).includes(res.value)) {
      ElNotification({
        title: '警告',
        message: '该名称已存在，请重新输入！',
        type: 'warning',
      });
      return;
    }
    name = res.value;
  }
}
</script>

<template>
  <div class="header">
    <div class="left">
      <span class="left-back" @click="handleBackHome">
        <BackIcon class="icon" />返回首页
      </span>
    </div>
    <div class="center" @click="handleEditName">
      <span>{{ name || '点此编辑简历名称' }}</span>
      <EditIcon class="icon" />
    </div>
    <div class="right">
      <ElButton type="success" @click="handleSave">保存</ElButton>
      <ElButton type="primary" @click="handleDownload">下载附件</ElButton>
      <ElButton type="warning" @click="handleChoose">模板选择</ElButton>
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
  .center {
    color: #333;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
    .icon {
      color: #333;
      margin-left: .5rem;
    }
  }
}
</style>