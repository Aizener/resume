<script setup lang="ts">
import ListIcon from '~icons/material-symbols/list-alt-rounded';
import MenuIcon from '~icons/gg/menu-grid-r';

const showType = $ref('box');
</script>

<template>
  <div class="my">
    <div class="my-top">
      <h2>我的简历列表</h2>
      <div class="type">
        <div
          class="icon"
          :class="{ active: showType === 'box' }"
          @click="showType = 'box'"
        >
          <MenuIcon />
        </div>
        <div
          class="icon"
          :class="{ active: showType === 'row' }"
          @click="showType = 'row'"
        >
          <ListIcon />
        </div>
      </div>
    </div>
    <div class="my-list" :class="[showType]">
      <div class="item" v-for="(item, idx) in 10" :key="idx">
        <img class="cover" src="../assets/imgs/temp/base.jpeg" alt="">
        <div class="info">
          <p class="title">简历名称</p>
          <div>
            <span class="date">2023-02-27</span>
            <el-button type="success">制作</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my {
  width: 1000px;
  margin: 1rem auto;
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  z-index: 2;
  &-top {
    display: flex;
    justify-content: space-between;
    .type {
      display: flex;
      .icon {
        color: #fff;
        font-size: 24px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #999;
        margin-left: 1rem;
        cursor: pointer;
        &.active {
          background-color: #4d85ff;
        }
      }
    }
  }
  &-list {
    margin-top: 2rem;
    &.box {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 215px;
        position: relative;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow: hidden;
        margin-right: 2rem;
        margin-bottom: 2rem;
        &:hover {
          box-shadow: 0 0 5px #999;
          transform: translateY(-5px);
        }
        &:nth-child(4n) {
          margin-right: 0;
        }
        .cover {
          width: 100%;
          height: 250px;
        }
        .info {
          color: #333;
          font-size: 14px;
          width: 100%;
          padding: .5rem;
          border-top: 1px solid #ddd;
          & > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: .5rem;
            .date {
              color: gray;
              font-size: 12px;
            }
          }
        }
      }
    }
    &.row {
      width: 100%;
      position: relative;
      .item {
        border-radius: 5px;
        overflow: hidden;
        border: 1px solid #ddd;
        display: flex;
        margin-bottom: 1rem;
        &:hover {
          box-shadow: 0 0 5px #ccc;
        }
        .cover {
          width: 200px;
          height: 250px;
        }
        .info {
          flex: 1;
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          color: #333;
          font-size: 20px;
          border-left: 1px solid #ddd;
          & > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .date {
              color: #999;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>