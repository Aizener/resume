<script setup lang="ts">
import { useMainStore } from '@/store/main';

const mainStore = useMainStore();
const { like } = mainStore;

const handleChangeEditor = () => {
  like.contentArr = like.content.split('\n');
}
</script>

<template>
  <div class="advantage">
    <h3>个人兴趣</h3>
    <div class="form">
      <el-form-item>
        <el-input
          class="editor"
          type="textarea"
          v-model="like.content"
          placeholder="请输入你的个人兴趣爱好"
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