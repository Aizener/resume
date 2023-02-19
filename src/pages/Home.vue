<script setup lang="ts">
const router = useRouter();

const handleBeginDesign = () => {
  router.push('/design');
}
</script>

<template>
  <div class="home">
    <button class="begin-btn" @click="handleBeginDesign">制作附件</button>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.begin-btn {
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: 1px solid #eee;
  outline: none;
  background-color: skyblue;
  cursor: pointer;
  &:active {
    box-shadow: 1px 1px 5px inset rgba(0, 0, 0, .3);
  }
}
</style>