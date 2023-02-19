<script setup lang="ts">
import html2Canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const cvs: any = [];
onMounted(() => {
  const temp = document.querySelector("#temp") as HTMLElement;

  const page = Math.ceil(temp.scrollHeight / 746);
  for (let i = 0 ; i < page ; i ++) {
    html2Canvas(temp, {
      scale: 2,
      y: i * 746
    }).then(canvas => {
      cvs.push(canvas);
      (document.querySelector('#pages') as HTMLElement).appendChild(canvas)
    });
  }
});

const handleDownload = () => {
  const doc = new jsPDF({
    unit: 'pt', // 单位用pt
    format: 'a4',
  });
  const page1 = cvs[0].toDataURL('image/jpeg', 1.0);
  const page2 = cvs[1].toDataURL('image/jpeg', 1.0);
  const a4_width = 595.28; // a4纸的宽度 单位pt
  const a4_height = 841.89; //  a4纸的高度 单位pt

  doc.addImage(page1, 'jpeg', 0, 0, a4_width, a4_height);
  doc.addPage();
  doc.addImage(page2, 'jpeg', 0, 0, a4_width, a4_height);
  doc.save();
}
</script>

<template>
  <div class="preview">
    <button @click="handleDownload">download</button>
    <div id="temp" class="temp">
      <h3>杨祥</h3>
      <div class="section">
        <span>男</span>
        <span>|</span>
        <span>年龄：26岁</span>
        <span>|</span>
        <span>13678398293</span>
        <span>|</span>
        <span>1215627787@qq.com</span>
        <span>四年工作经验</span>
        <span>|</span>
        <span>求职意向：前端开发</span>
        <span>|</span>
        <span>期望城市：成都</span>
      </div>
      <div class="content">
        <h4>个人优势</h4>
        <div class="list">
          <p>1. 三年web开发经验撒大丰收</p>
          <p>1. 三年web开发经验撒大丰收</p>
          <p>1. 三年web开发经验撒大丰收</p>
          <p>1. 三年web开发经验撒大丰收</p>
          <p>1. 三年web开发经验撒大丰收</p>
        </div>
      </div>
      <div class="content">
        <h4>工作经历</h4>
        <div class="content-item" v-for="(item, idx) in 4" :key="idx">
          <div class="title">
            <div class="left">
              <p class="name">叭叭成都科技有限公司</p>
              <p class="job">前端开发</p>
            </div>
            <span class="date">2021.08-2023.21</span>
          </div>
          <div class="list">
            <p>1. 三年web开发经验撒大丰收</p>
            <p>1. 三年web开发经验撒大丰收</p>
            <p>1. 三年web开发经验撒大丰收</p>
            <p>1. 三年web开发经验撒大丰收</p>
            <p>1. 三年web开发经验撒大丰收</p>
          </div>
        </div>
      </div>
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
    width: 0;
  }
  .pages {
    display: flex;
    flex-direction: column;
  }
  .temp {
    width: 527px;
    height: 746px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: -1;
    h3 {
      text-align: center;
      padding: 1rem 0;
    }
    .section {
      color: #333;
      font-size: 14px;
      max-width: 390px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      span {
        margin: 0 2px;
        line-height: 1.5rem;
      }
    }
    .content {
      width: 100%;
      padding: 1rem;
      h4 {
        color: #333;
        border-bottom: 2px solid #eee;
        padding-bottom: .5rem;
      }
      .title {
        display: flex;
        padding: .5rem 0;
        justify-content: space-between;
        align-items: center;
        .left {
          display: flex;
          align-items: center;
          .name {
            font-weight: bold;
          }
          .job {
            color: #333;
            margin-left: 2rem;
          }
        }
        .date {
          color: #666;
          font-size: 15px;
        }
      }
      .list {
        padding: .5rem;
        p {
          color: #333;
          font-size: 14px;
          line-height: 1.5;
          letter-spacing: .1rem;
        }
      }
    }
  }
}
</style>