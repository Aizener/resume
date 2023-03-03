## 一个免费的在线简历生成工具

欢迎使用我的在线简历制作网页，该网页可用于创建个人简历，帮助您展示自己的技能、经验和工作成果，提高求职效果。  
该网页支持多种简历模板，您可以根据个人需要进行选择。  

### 使用技术

该工具是基于Vue3.2+VueRouter4+Pinia搭建的一个简历生成工具，目前已实现了最基本的编辑和效果展现以及PDF的下载功能！

> 目前该项目暂无后端提供服务，涉及到的一切数据均保存在本地存储中！


## 使用

其实没有什么需要讲解的，就说一下使用的两个点。

### 制作简历

制作简历的过程十分简单，只需要按照下列步骤使用即可。

### 如何使用
1. 进入该网页；
2. 点击 "开始制作" 按钮；
3. 除了默认模板之外，你还可以选择一个简历模板并填写个人信息；
4. 编辑简历中的各个部分，包括个人简介、工作经历、教育经历等等；
5. 预览您的简历并进行编辑和修改；
6. 完成编辑后，可以将简历以PDF格式下载或分享。。
## 模板创建

目前模板较少，如果你有喜欢的模板可以向我留言，我空余时间可以去实现该模板！  
当然，如果你有兴趣，可以基于该项目新建一个自己的模板，方法如下：
1. 克隆本项目；
2. 在`template`目录下新建一个`vue`文件，该文件需要引入`Temp`组件，基于`slot`特性就可以在编写页面的时候获取到表单的数据了！
3. 你也可以提`PR`将编写的模板合并到该仓库中。

下面是一个实例文件：
```vue
// Base.vue 新建的模板文件，名称可随意命名，不重复即可
<script setup lang="ts">
</script>

<template>
  <div class="base">
    <Temp>
      <template #info="{ data }">
      </template>
      <template #advantage="{ data }">
      </template>
      <template #work="{ data }">
      </template>
      <template #project="{ data }">
      </template>
      <template #education="{ data }">
      </template>
      <template #like="{ data }">
      </template>
      <template #link="{ data }">
      </template>
    </Temp>
  </div>
</template>

<style lang="scss" scoped>
</style>
```