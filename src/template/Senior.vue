<script setup lang="ts">
import IconPhone from '~icons/material-symbols/perm-phone-msg-sharp';
import IconEmail from '~icons/material-symbols/attach-email';
</script>

<template>
  <div class="senior">
    <Temp>
      <template #info="{ data }">
        <div class="info">
          <h2 class="name">{{ data.name }}</h2>
          <div class="info-item1">
            <span>{{ data.workTime }}年工作经验</span>
            <span>|</span>
            <span>求职意向：{{ data.job }}</span>
            <span>|</span>
            <span>期望薪资：{{ data.money }}</span>
          </div>
          <div class="info-item2">
            <span>{{ data.sex }}</span>
            <span>|</span>
            <span>生日：{{ data.birthday }}</span>
            <span>|</span>
            <span>{{ data.city}}</span>
            <span>
              <IconPhone class="icon" />
              {{ data.phone }}
            </span>
            <span>|</span>
            <span>
              <IconEmail class="icon" />
              {{ data.email }}
            </span>
          </div>
        </div>
      </template>
      <template #advantage="{ data }">
        <div class="advantage">
          <div class="title">
            <div class="title-text">个人优势</div>
          </div>
          <ul>
            <li
              v-for="(item, idx) in data.contentArr"
              :key="idx"
            >{{ item }}</li>
          </ul>
        </div>
      </template>
      <template #work="{ data }">
        <div class="work">
          <div class="title">
            <div class="title-text">工作经历</div>
          </div>
          <div class="list">
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
          <div class="title">
            <div class="title-text">项目经历</div>
          </div>
          <div class="list">
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
          <div class="title">
            <div class="title-text">教育经历</div>
          </div>
          <div class="row" v-for="(item, idx) in data.educations" :key="idx">
            <div class="top">
              <div class="left">
                <span class="name">{{ item.name }}</span>
                <span class="grade">{{ item.grade }}</span>
                <span class="type">{{ item.role }}</span>
              </div>
              <span class="date">{{ item.educationTime }}</span>
            </div>
            <div class="content">
              <p v-for="(_item, _idx) in item.contentArr" :key="_idx">{{ _item }}</p>
            </div>
          </div>
        </div>
      </template>
      <template #like="{ data }">
        <div class="like">
          <div class="title">
            <div class="title-text">个人兴趣</div>
          </div>
          <div class="content" v-html="data.content"></div>
        </div>
      </template>
      <template #link="{ data }">
        <div class="link">
          <div class="title">
            <div class="title-text">个人链接</div>
          </div>
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
.info {
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 20px;
    margin-top: 1rem;
  }
  &-item1 {
    margin-top: 1rem;
    span {
      margin: 0 5px;
      font-size: 14px;
    }
  }
  &-item2 {
    color: #666;
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 1rem;
    padding: 5px 1rem;
    border-radius: 5px;
    background-color: rgb(245, 246, 248);
    span {
      margin: 0 5px;
      display: flex;
      align-items: center;
      .icon {
        color: rgb(0, 167, 169);
        margin-right: 3px;
        transform: translateY(1px);
      }
    }
  }
}
.title {
  position: relative;
  &-text {
    color: #fff;
    width: 110px;
    height: 30px;
    padding-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px 50px 0 0;
    background-color: rgb(0, 122, 133);
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 0;
    background: linear-gradient(to right, rgb(0, 122, 133), #fff);
  }
}
ul {
  margin: 1rem 0;
  list-style-type: none;
}
li {
  color: #333;
  letter-spacing: 2px;
  padding: 2px 0;
}
.advantage, .work, .project, .education, .like, .link {
  margin-top: 2rem;
}
.list {
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
        font-size: 16px;
        margin-left: 2rem;
      }
    }
    .content {
      margin-top: 1rem;
    }
  }
}
.row {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }
  .left {
    .name {
      font-weight: bold;
    }
    .grade, .type {
      margin-left: 1rem;
    }
  }
  .content {
    margin-top: .5rem;
  }
}
</style>