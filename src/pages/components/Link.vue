<script setup lang="ts">
import { useMainStore } from '@/store/main';

const mainStore = useMainStore();
const { link } = mainStore;

const handleChangeEditor = () => {
  link.contentArr = link.content.split('\n');
}
</script>

<template>
  <div class="advantage">
    <h3>个人链接</h3>
    <div class="form">
      <el-form-item>
        <el-input
          class="editor"
          type="textarea"
          v-model="link.content"
          placeholder="请输入你的个人链接，多个链接请换行"
          :rows="4"
          resize="none"
          @input="handleChangeEditor"
        ></el-input>
      </el-form-item>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>