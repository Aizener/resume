<script setup lang="ts">
const {
  placeholder = '请输入内容',
  modelValue
} = defineProps<{
  placeholder?: string,
  modelValue: string,
  maxLength?: number | string
}>();;
</script>

<template>
  <input
    class="c-input"
    :placeholder="placeholder"
    :maxLength="maxLength"
    :value="modelValue"
    @input="$event => $emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style lang="scss" scoped>
.c-input {
  padding: .5rem;
  border-radius: 3px;
  border: 1px solid #eee;
  background-color: #f8f9fa;
  &:focus {
    outline: none;
    border: 1px solid #00bebd;
  }
}
</style>