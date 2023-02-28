## 一个免费的在线简历生成工具

该工具是基于Vue3.2+VueRouter4+Pinia搭建的一个简历生成工具，目前已实现了最基本的编辑和效果展现以及PDF的下载功能！

> 目前该项目暂无后端提供服务，涉及到的一切数据均保存在本地存储中！

## 使用

其实没有什么需要讲解的，就说一下使用的两个点。

### 制作简历

进入网站首页，点击「立即开始>>」即可在线编辑简历了，需要注意的是：为了不必要的操作，编辑表单过后，会有3秒钟的延迟来生成预览效果。

### 下载简历
生成的效果提供的下载功能，只能保存为PDF文件，且文件内容是无法编辑的（因为其实PDF里面的保存的是canvas转的图片）。

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