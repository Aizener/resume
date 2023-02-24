<script setup lang="ts">
import { useMainStore } from '@/store/main';

const mainStore = useMainStore();
const { advantage } = mainStore;

const handleChangeEditor = () => {
  advantage.contentArr = advantage.content.split('\n');
}
</script>

<template>
  <div class="advantage">
    <h3>个人优势</h3>
    <div class="form">
      <el-form-item>
        <el-input
          class="editor"
          type="textarea"
          placeholder="请输入你的个人优势"
          v-model="advantage.content"
          :rows="8"
          resize="none"
          @input="handleChangeEditor"
        ></el-input>
      </el-form-item>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>