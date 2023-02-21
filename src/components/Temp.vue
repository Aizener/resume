<script setup lang="ts">

</script>

<template>
  <div id="temp" class="temp">
    <div class="row temp-info">
      <slot name="info"></slot>
    </div>
    <div class="row temp-advantage">
      <slot name="advantage"></slot>
    </div>
    <div class="row temp-work">
      <slot name="work"></slot>
    </div>
    <div class="row temp-project">
      <slot name="project"></slot>
    </div>
    <div class="row temp-education">
      <slot name="education"></slot>
    </div>
    <div class="row temp-like">
      <slot name="like"></slot>
    </div>
    <div class="row temp-link">
      <slot name="link"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.temp {
  width: 595px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px #ccc;
  & > div {
    width: 100%;
  }
}
</style>