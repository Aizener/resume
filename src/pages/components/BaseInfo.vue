<script setup lang="ts">
const baseInfo = $ref({
  name: ''
});
</script>

<template>
  <div class="base-info">
    <h3>个人信息</h3>
    <div class="form">
      <CInput v-model="baseInfo.name"></CInput>
    </div>
    {{ baseInfo }}
  </div>
</template>

<style lang="scss" scoped>

</style>