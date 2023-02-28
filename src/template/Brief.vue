<script setup lang="ts">
import IconPhone from '~icons/material-symbols/perm-phone-msg-sharp';
import IconEmail from '~icons/material-symbols/attach-email';
</script>

<template>
  <div class="brief">
    <Temp>
      <div class="brief-top"></div>
      <template #info="{ data }">
        <h2>{{ data.name }}</h2>
        <div class="info-list">
          <div class="item">
            <span>{{ data.sex }}&nbsp;|&nbsp;{{ data.age }}岁</span>
          </div>
          <div class="item">
            <IconPhone class="icon" />
            <span>{{ data.phone }}</span>
          </div>
          <div class="item">
            <IconEmail class="icon" />
            <span>{{ data.phone }}</span>
          </div>
        </div>
        <p>{{ data.workTime }}年工作经验</p>
      </template>
      <template #advantage="{ data }">
        <div class="title">
          <p class="title-main">个人优势</p>
        </div>
        <ul>
          <li
            v-for="(item, idx) in data.contentArr"
            :key="idx"
          >{{ item }}</li>
        </ul>
      </template>
      <template #work="{ data }">
        <div class="title">
          <p class="title-main">工作经历</p>
        </div>
        <div class="work">
          <div
            class="work-item"
            v-for="(item, idx) in data.works"
            :key="idx"
          >
            <div class="info">
              <div class="info-left">
                <p class="name">{{ item.name }}</p>
                <p class="job">{{ item.job }}</p>
              </div>
              <span class="date">{{ item.workTime }}</span>
            </div>
            <div class="content">
              <p
                v-for="(_item, idx) in item.contentArr"
                :key="idx"
              >{{ _item }}</p>
            </div>
          </div>
        </div>
      </template>
      <template #project="{ data }">
        <div class="title">
          <p class="title-main">项目经历</p>
        </div>
        <div class="project">
          <div
            class="project-item"
            v-for="(item, idx) in data.projects"
            :key="idx"
          >
            <div class="info">
              <p class="name">{{ item.name }}</p>
              <span class="date">{{ item.projectTime }}</span>
            </div>
            <div class="content">
              <p v-for="(_item, _idx) in item.descArr" :key="_idx">{{ _item }}</p>
            </div>
          </div>
        </div>
      </template>
      <template #education="{ data }">
        <div class="title">
          <p class="title-main">教育经历</p>
        </div>
        <div class="education">
          <div
            class="item"
            v-for="(item, idx) in data.educations"
            :key="idx"
          >
            <div class="left">
              <span class="name">{{ item.name }}</span>
              <span class="grade">{{ item.grade }}</span>
            </div>
            <span class="date">{{ item.educationTime }}</span>
          </div>
        </div>
      </template>
      <template #like="{ data }">
        <div class="title">
          <p class="title-main">兴趣爱好</p>
        </div>
        <div class="content" v-html="data.content"></div>
      </template>
      <template #link="{ data }">
        <div class="title">
          <p class="title-main">个人链接</p>
        </div>
        <div class="content">
          <p
            v-for="(item, idx) in data.contentArr"
            :key="idx"
          >{{ item }}</p>
        </div>
      </template>
    </Temp>
  </div>
</template>

<style lang="scss" scoped>
.brief {
  &-top {
    position: relative;
    height: 100px;
    &::after {
      content: '';
      position: absolute;
      left: -1rem;
      top: -1rem;
      width: calc(120% + 2rem);
      margin-top: -100px;
      margin-left: -60px;
      height: 200px;
      border-radius: 0 0 50% 50%;
      background-color: rgb(0, 123, 134);
    }
  }
  &:deep(.temp) {
    .temp-info {
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .info-list {
        color: gray;
        display: flex;
        align-items: center;
        margin-top: .5rem;
        .item {
          margin: 0 .5rem;
          .icon {
            color: #999;
            margin-right: 2px;
            transform: translateY(2px);
          }
        }
      }
      p {
        color: #666;
        margin-top: .5rem;
      }
    }
    ul, li {
      margin: 0;
      list-style: none;
    }
    li {
      color: #333;
      letter-spacing: 2px;
    }
    .title {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      &-main {
        font-size: 22px;
        font-weight: bold;
      }
      &::after {
        content: '';
        flex: 1;
        height: 2px;
        background-color: #eee;
        margin-left: 1rem;
      }
    }
    .temp-work {
      .work {
        &-item {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          &:last-child {
            margin-bottom: 0;
          }
          .info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &-left {
              display: flex;
              align-items: center;
              .name {
                font-size: 18px;
                font-weight: bold;
              }
              .job {
                margin-left: 2rem;
              }
            }
            .date {
              color: #999;
            }
          }
          .content {
            color: #333;
            margin-top: .5rem;
          }
        }
      }
    }
    .temp-project {
      .project {
        &-item {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          &:last-child {
            margin-bottom: 0;
          }
          .info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: .5rem;
            .name {
              font-size: 18px;
              font-weight: bold;
            }
            .date {
              color: #999;
            }
          }
          .content {
            color: #333;
          }
        }
      }
    }
    .temp-education {
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          display: flex;
          align-items: center;
          .name {
            font-size: 18px;
            font-weight: bold;
          }
          .grade {
            margin-left: 2rem;
          }
        }
        .date {
          color: #999;
        }
      }
    }
  }
}
</style>