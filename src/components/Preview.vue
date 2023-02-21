<script setup lang="ts">
import html2Canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Base from '@/template/Base.vue';
import { findLastChild } from '@/utils'

const a4Width = $ref(595.28); // a4纸的宽度 单位pt
const a4Height = $ref(841.89); //  a4纸的高度 单位pt
const cvs: HTMLCanvasElement[] = [];

onMounted(async () => {
  const temp = document.querySelector("#temp-page") as HTMLElement;

  const page = Math.ceil(temp.scrollHeight / a4Height);
  let lastY = 0;
  for (let i = 0 ; i < page ; i ++) {
    const el = findLastChild(document.querySelector('#temp') as HTMLElement, a4Height * (i + 1));
    const y = el.offsetTop;
    
    const canvas = await html2Canvas(temp, {
      scale: 2,
      y: lastY,
      width: a4Width,
      height: i === page - 1 ? a4Height : y - lastY,
    });
    
    lastY = y;
    cvs.push(canvas);
    (document.querySelector('#pages') as HTMLElement).appendChild(canvas);
  }
});

const handleDownload = () => {
  const doc = new jsPDF({
    unit: 'pt', // 单位用pt
    format: 'a4',
  });
  for (let i = 0 ; i < cvs.length ; i ++) {
    const page = cvs[i].toDataURL('image/jpeg', 1.0);
    doc.addImage(page, 'jpeg', 0, 0, a4Width, a4Height);
    i < cvs.length - 1 && doc.addPage();
  }
  doc.save();
}
</script>

<template>
  <button @click="handleDownload">download</button>
  <div class="preview">
    <div id="temp-page" class="temp-page">
      <Base />
    </div>
    <div id="pages" class="pages"></div>
  </div>
</template>

<style lang="scss" scoped>
.preview {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #eee;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }
  .pages {
    display: flex;
    flex-direction: column;
    &:deep(canvas) {
      margin: 0 0 .5rem 0;
    }
  }
  .temp-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    overflow-y: auto;
    background-color: #fff;
    left: -100%;
    top: 0;
    left: -10000%;
    top: -10000%;
    background-color: #fff;
  }
}
</style>