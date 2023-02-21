<script setup lang="ts">

</script>

<template>
  <div class="base">
    <Temp>
      <template #info>
        <h2>杨祥</h2>
        <div class="info-list">
          <span>男</span>
          <span>|</span>
          <span>年龄：26岁</span>
          <span>|</span>
          <span>电话：13678398293</span>
          <span>|</span>
          <span>Email：13678398293</span>
        </div>
        <div class="info-list">
          <span>3年工作经验</span>
          <span>|</span>
          <span>求职意向：Web前端</span>
          <span>|</span>
          <span>期望城市：成都</span>
        </div>
      </template>
      <template #advantage>
        <h1>个人优势</h1>
        <ol>
          <li>1.负责制手动缩放是手动阀是的发生的,负责制手动缩放是手动阀是的发生的；</li>
          <li>2.负责制手动缩放是手动阀是的发生的；</li>
          <li>3.负责制手动缩放是手动阀是的发生的；</li>
          <li>4.负责制手动缩放是手动阀是的发生的；</li>
          <li>5.负责制手动缩放是手动阀是的发生的；</li>
        </ol>
      </template>
      <template #work>
        <h1>工作经历</h1>
        <div class="work" v-for="(item, idx) in 4">
          <div class="title">
            <div>
              <p class="maintitle">叭叭成都科技有限公司</p>
              <p class="subtitle">Web前端开发工程师</p>
            </div>
            <span class="date">2021.08~2022.09</span>
          </div>
          <ol>
            <li>1.负责制手动缩放是手动阀是的发生的,负责制手动缩放是手动阀是的发生的；</li>
            <li>2.负责制手动缩放是手动阀是的发生的；</li>
            <li>3.负责制手动缩放是手动阀是的发生的；</li>
            <li>4.负责制手动缩放是手动阀是的发生的；</li>
            <li>5.负责制手动缩放是手动阀是的发生的；</li>
          </ol>
        </div>
      </template>
      <template #project>
        <h1>项目经历</h1>
        <div class="work" v-for="(item, idx) in 4">
          <div class="title">
            <div>
              <p class="maintitle">叭叭成都科技有限公司</p>
              <p class="subtitle">Web前端开发工程师</p>
            </div>
            <span class="date">2021.08~2022.09</span>
          </div>
          <div class="content">
            阿斯达四大所阿斯达四大所阿斯达四大所阿斯达四大所阿斯达四大所阿斯达四大所阿斯达四大所阿斯达四大所阿斯达四大所
            阿斯达四大所阿斯达四大所阿斯达四大所阿斯达四大所阿斯达四大所阿斯达四大所阿斯达四大所阿斯达四大所阿斯达四大所
          </div>
        </div>
      </template>
      <template #education>
        <h1>教育经历</h1>
        <div class="school">
          <div class="school-left">
            <p class="name">四川信息职业技术学院</p>
            <p class="grade">大专</p>
            <p class="type">软件技术</p>
          </div>
          <span class="school-date">2015-2018</span>
        </div>
      </template>
      <template #like>
        <h1>个人兴趣</h1>
        <div class="like">
          喜欢看电影，旅游，下象棋
        </div>
      </template>
      <template #link>
        <h1>个人链接</h1>
        <div class="link">
          <p>http://yangxiang.com</p>
        </div>
      </template>
    </Temp>
  </div>
</template>

<style lang="scss" scoped>
ol, li {
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
    text-align: center;
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
  ol {
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
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