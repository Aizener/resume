<script setup lang="ts">
import BaseInfo from './components/BaseInfo.vue';
</script>

<template>
  <div class="design">
    <div class="design-left">
      <BaseInfo></BaseInfo>      
    </div>
    <div class="design-right">
      <Preview></Preview>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.design {
  height: 100%;
  display: flex;
  justify-content: space-between;
  &-left {
    flex: 1;
    min-width: 800px;
    padding: 3rem;
  }
  &-right {
    flex: 1;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    padding: 3rem;
    background-color: #f2f5fa;
  }
}
</style>