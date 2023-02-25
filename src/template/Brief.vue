<script setup lang="ts">
import IconPhone from '~icons/material-symbols/perm-phone-msg-sharp';
import IconEmail from '~icons/material-symbols/attach-email';
</script>

<template>
  <div class="brief">
    <Temp>
      <div class="brief-top"></div>
      <template #info="{ data }">
        <h2>杨祥</h2>
        <div class="info-list">
          <div class="item">
            <span>男&nbsp;|&nbsp;26岁</span>
          </div>
          <div class="item">
            <IconPhone class="icon" />
            <span>13678398293</span>
          </div>
          <div class="item">
            <IconEmail class="icon" />
            <span>1215627787@qq.com</span>
          </div>
        </div>
        <p>4年工作经验</p>
      </template>
      <template #advantage="{ data }">
        <div class="title">
          <p class="title-main">个人优势</p>
        </div>
        <ul>
          <li>1.锁定了福建省考虑到就分手；锁定了福建省考虑到就分手；锁定了福建省考虑到就分手；</li>
          <li>1.锁定了福建省考虑到就分手；</li>
          <li>1.锁定了福建省考虑到就分手；</li>
          <li>1.锁定了福建省考虑到就分手；</li>
          <li>1.锁定了福建省考虑到就分手；</li>
        </ul>
      </template>
      <template #work="{ data }">
        <div class="title">
          <p class="title-main">工作经历</p>
        </div>
        <div class="work">
          <div class="work-item" v-for="(item, idx) in 3" :key="idx">
            <div class="info">
              <div class="info-left">
                <p class="name">成都力之奇科技</p>
                <p class="job">产品经历</p>
              </div>
              <span class="date">2020.09-2021.05</span>
            </div>
            <div class="content">胜多负少开了多久烦死了肯德基烦死了快点解封手动阀；</div>
          </div>
        </div>
      </template>
      <template #project="{ data }">
        <div class="title">
          <p class="title-main">项目经历</p>
        </div>
        <div class="project">
          <div class="project-item" v-for="(item, idx) in 3" :key="idx">
            <div class="info">
              <p class="name">成都力之奇科技</p>
              <span class="date">2020.09-2021.05</span>
            </div>
            <div class="content">胜多负少开了多久烦死了肯德基烦死了快点解封手动阀；</div>
          </div>
        </div>
      </template>
      <template #education="{ data }">
        <div class="title">
          <p class="title-main">教育经历</p>
        </div>
        <div class="education">
          <div class="item">
            <div class="left">
              <span class="name">四川信息职业技术学院</span>
              <span class="grade">大专</span>
            </div>
            <span class="date">2020.09-2021.05</span>
          </div>
        </div>
      </template>
      <template #like="{ data }">
        <div class="title">
          <p class="title-main">兴趣爱好</p>
        </div>
        <div class="content">兴趣爱好</div>
      </template>
      <template #link="{ data }">
        <div class="title">
          <p class="title-main">个人链接</p>
        </div>
        <div class="content">兴趣爱好</div>
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
            transform: translateY(3px);
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