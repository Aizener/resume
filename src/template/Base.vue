<script setup lang="ts">
import IconPhone from '~icons/material-symbols/perm-phone-msg-sharp';
import IconEmail from '~icons/material-symbols/attach-email';
</script>

<template>
  <div class="base">
    <Temp>
      <template #info="{ data }">
        <h2>{{ data.name }}</h2>
        <div class="info-list">
          <div>
            <span>性别：{{ data.sex }}</span>
            <span>|</span>
          </div>
          <div>
            <span>年龄：{{ data.age }}岁</span>
            <span>|</span>
          </div>
          <div>
            <IconPhone class="icon" />
            <span>{{ data.phone }}</span>
            <span>|</span>
          </div>
          <div>
            <IconEmail class="icon" />
            <span>{{ data.email }}</span>
          </div>
        </div>
        <div class="info-list">
          <div v-if="data.workTime">
            <span>{{ data.workTime }}年工作经验</span>
            <span>|</span>
          </div>
          <div v-if="data.job">
            <span>求职意向：{{ data.job }}</span>
            <span>|</span>
          </div>
          <div v-if="data.city">
            <span>期望城市：{{ data.city }}</span>
            <span>|</span>
          </div>
          <div v-if="data.origin">
            <span>籍贯：{{ data.origin }}</span>
            <span>|</span>
          </div>
          <div v-if="data.money">
            <span>期望薪资：{{ data.money }}</span>
          </div>
        </div>
      </template>
      <template #advantage="{ data }">
        <h1>个人优势</h1>
        <ul>
          <li
            v-for="(item, idx) in data.contentArr"
            :key="idx"
          >{{ item }}</li>
        </ul>
      </template>
      <template #work="{ data }">
        <h1>工作经历</h1>
        <div
          class="work"
          v-for="(item, idx) in data.works"
          :key="idx"
        >
          <div class="title">
            <div>
              <p class="maintitle">{{ item.name }}</p>
              <p class="subtitle">{{ item.job }}</p>
            </div>
            <span class="date">{{ item.workTime }}</span>
          </div>
          <ul>
            <li
              v-for="(_item, idx) in item.contentArr"
              :key="idx"
            >{{ _item }}</li>
          </ul>
        </div>
      </template>
      <template #project="{ data }">
        <h1>项目经历</h1>
        <div
          class="work"
          v-for="(item, idx) in data.projects"
          :key="idx"
        >
          <div class="title">
            <div>
              <p class="maintitle">{{ item.name }}</p>
              <p class="subtitle">{{ item.role }}</p>
            </div>
            <span class="date">{{ item.projectTime }}</span>
          </div>
          <div class="content">
            <p v-for="(_item, _idx) in item.descArr" :key="_idx">{{ _item }}</p>
          </div>
        </div>
      </template>
      <template #education="{ data }">
        <h1>教育经历</h1>
        <div
          class="school"
          v-for="(item, idx) in data.educations"
          :key="idx"
        >
          <div class="school-top">
            <div class="school-left">
              <p class="name">{{ item.name }}</p>
              <p class="grade">{{ item.grade }}</p>
              <p class="type">{{ item.role }}</p>
            </div>
            <span class="school-date">{{ item.educationTime }}</span>
          </div>
          <div class="school-content">
            <p v-for="(_item, _idx) in item.contentArr" :key="_idx">{{ _item }}</p>
          </div>
        </div>
      </template>
      <template #like="{ data }">
        <h1>个人兴趣</h1>
        <div class="like" v-html="data.content"></div>
      </template>
      <template #link="{ data }">
        <h1>个人链接</h1>
        <div class="link">
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
ul, li {
  list-style: none;
}
.temp {
  color: #333;
  align-items: center;
  font-family: "微软雅黑";
  &:deep(.row) {
    margin: .8rem 0;
  }
  h2 {
    font-size: 20px;
    text-align: center;
    margin-bottom: .5rem;
  }
  .info-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .icon {
      color: gray;
      font-size: 14px;
      transform: translateY(2px);
    }
    span {
      font-size: 14px;
      margin: 0 3px;
      line-height: 1.5;
    }
  }
  h1 {
    font-size: 22px;
    text-align: left;
    padding-bottom: .5rem;
    border-bottom: 2px solid #ccc;
  }
  ul {
    margin: 1rem 0;
    li {
      letter-spacing: 2px;
      line-height: 1.5;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    & > div {
      display: flex;
      align-items: center;
      font-size: 18px;
    }
    .maintitle {
      font-weight: bold;
    }
    .subtitle {
      margin-left: 2rem;
    }
    .date {
      color: #666;
    }
  }
  .content {
    margin-top: .5rem;
    letter-spacing: 2px;
  }

  .school {
    margin: 1rem 0;
    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-content {
      margin-top: .5rem;
      letter-spacing: 2px;
    }
    &-left {
      display: flex;
      align-items: center;
      .name {
        font-size: 16px;
        font-weight: bold;
      }
      .grade, .type {
        margin-left: 1rem;
      }
    }
    &-date {
      color: #666;
    }
  }
  .like, .link {
    margin: .5rem 0;
  }
}
</style>