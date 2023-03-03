<script setup lang="ts">
import IconPhone from '~icons/material-symbols/perm-phone-msg-sharp';
import IconEmail from '~icons/material-symbols/attach-email';
</script>

<template>
  <div class="dark">
    <Temp>
      <template #info="{ data }">
        <div class="info">
          <h2 class="name">{{ data.name }}</h2>
          <div class="info-list">
            <div class="item">
              <span>{{ data.sex }}</span>
              <span>|</span>
              <span>{{ data.age }}岁</span>
            </div>
            <div class="item">
              <IconPhone class="icon" />
              <span>{{ data.phone }}</span>
            </div>
            <div class="item">
              <IconEmail class="icon" />
              <span>{{ data.email }}</span>
            </div>
          </div>
          <div class="info-list">
            <span>{{ data.workTime }}年工作经验</span>
            <span>|</span>
            <span>求职意向：{{ data.job }}</span>
            <span>|</span>
            <span>期望城市：{{ data.city }}</span>
          </div>
        </div>
      </template>
      <template #advantage="{ data }">
        <div class="advantage">
          <div class="title">个人优势</div>
          <ul class="list">
            <li
              v-for="(item, idx) in data.contentArr"
              :key="idx"
            >{{ item }}</li>
          </ul>
        </div>
      </template>
      <template #work="{ data }">
        <div class="work">
          <div class="title">工作经历</div>
          <div class="row-list">
            <div class="item" v-for="(item, idx) in data.works" :key="idx">
              <div class="top">
                <div class="left">
                  <span class="name">{{ item.name }}</span>
                  <span class="job">{{ item.job }}</span>
                </div>
                <span class="date">{{ item.workTime }}</span>
              </div>
              <div class="content">
                <p v-for="(_item, _idx) in item.contentArr" :key="_idx">{{ _item }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #project="{ data }">
        <div class="project">
          <div class="title">项目经历</div>
          <div class="row-list">
            <div class="item" v-for="(item, idx) in data.projects" :key="idx">
              <div class="top">
                <div class="left">
                  <span class="name">{{ item.name }}</span>
                  <span class="job">{{ item.role }}</span>
                </div>
                <span class="date">{{ item.projectTime }}</span>
              </div>
              <div class="content">
                <p v-for="(_item, _idx) in item.descArr" :key="_idx">{{ _item }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #education="{ data }">
        <div class="education">
          <div class="title">教育经历</div>
          <div class="row-list">
            <div class="item" v-for="(item, idx) in data.educations" :key="idx">
              <div class="top">
                <div class="left">
                  <span class="name">{{ item.name }}</span>
                  <span class="job">{{ item.role }}</span>
                </div>
                <span class="date">{{ item.educationTime }}</span>
              </div>
              <div class="content">
                <p v-for="(_item, _idx) in item.contentArr" :key="_idx">{{ _item }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #like="{ data }">
        <div class="like">
          <div class="title">个人爱好</div>
          <div class="content" v-html="data.content"></div>
        </div>
      </template>
      <template #link="{ data }">
        <div class="link">
          <div class="title">个人链接</div>
          <div class="content">
            <p
              v-for="(item, idx) in data.contentArr"
              :key="idx"
            >{{ item }}</p>
          </div>
        </div>
      </template>
    </Temp>
  </div>
</template>

<style lang="scss" scoped>
.dark {
  .info {
    color: #fff;
    width: calc(100% + 2rem);
    margin: -1rem;
    padding: 2rem;
    background-color: rgb(52, 58, 75);
    h2 {
      margin-bottom: 1rem;
    }
    &-list {
      display: flex;
      align-items: center;
      margin-top: .5rem;
      .item {
        margin-right: 2rem;
      }
      span {
        margin-right: .5rem;
      }
      .icon {
        transform: translateY(1px);
        margin-right: 5px;
      }
    }
  }
  .advantage, .work, .project, .education, .like, .link {
    margin-top: 2rem;
    padding: 0 .5rem;
  }

  ul {
    list-style: none;
    margin: 0;
  }
  li {
    margin-top: .5rem;
    letter-spacing: 1px;
  }
  .title {
    position: relative;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    transform: translateX(5px);
    margin-bottom: 1rem;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 5px;
      height: 70%;
      background-color: rgb(52, 58, 75);
    }
  }
  .row-list {
    .item {
      margin-top: 1rem;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name {
          font-size: 16px;
          font-weight: bold;
        }
        .job {
          margin-left: 2rem;
        }
        .date {
          color: #999;
        }
      }
      .content {
        margin-top: .5rem;
      }
    }
  }
}
</style>