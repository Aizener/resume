<script setup lang="ts">
import DeleteIcon from '~icons/material-symbols/delete-outline';
import ArrowDownIcon from '~icons/material-symbols/keyboard-arrow-down';

const {
  model,
  type
} = defineProps<{
  model: any,
  type: 'project' | 'work' | 'education'
}>();


let
  nameLabel = $ref(''),
  roleLabel = $ref(''),
  typeLabel = $ref(''),
  nameKey = $ref(''),
  roleKey = $ref(''),
  typeKey = $ref(''),
  dateKey = $ref(''),
  timeKey = $ref(''),
  contentKey = $ref(''),
  contentArrKey = $ref('');

switch (type) {
  case 'project':
    nameLabel = '项目名称';
    roleLabel = '担任角色';
    nameKey = 'name';
    roleKey = 'role';
    dateKey = 'projectDate';
    timeKey = 'projectTime';
    contentKey = 'desc';
    contentArrKey = 'descArr';
    break;
  case 'work':
    nameLabel = '公司名称';
    roleLabel = '任职岗位';
    nameKey = 'name';
    roleKey = 'job';
    dateKey = 'workDate';
    timeKey = 'workTime';
    contentKey = 'content';
    contentArrKey = 'contentArr';
    break;
  case 'education':
    nameLabel = '学校名称';
    roleLabel = '所学专业';
    nameKey = 'name';
    typeKey = 'grade';
    dateKey = 'educationDate';
    timeKey = 'educationTime';
    contentKey = 'content';
    contentArrKey = 'contentArr';
    break;
}


let isToggle = $ref<boolean>(false);
const handleToggle = () => {
  isToggle = !isToggle;
}

const handleChangeDate = () => {
  const [startDate, endDate] = model[dateKey];
  model[timeKey] = `${startDate.getFullYear()}.${startDate.getMonth() + 1}~${endDate.getFullYear()}.${endDate.getMonth() + 1}`;
}
const handleChangeEditor = () => {
  model[contentArrKey] = model[contentKey].split('\n');
}
</script>

<template>
  <div class="experience" :style="{ height: isToggle ? '101px' : '510px' }">
    <div class="show" @click="handleToggle">
      <div class="show-left">
        <h4>{{ model[nameKey] || nameLabel }}</h4>
        <div>
          <span class="role">{{ model[roleKey] || roleLabel }}</span>
          <span class="date">{{ model[timeKey] || '时间起止' }}</span>
        </div>
      </div>
      <div class="show-right">
        <DeleteIcon @click.stop="$emit('onRemove')" />
        <ArrowDownIcon class="arrow" :style="{ transform: isToggle ? 'rotate(0)' : 'rotate(180deg)'}" />
      </div>
    </div>
    <div class="form">
      <el-form-item :label="nameLabel">
        <el-input placeholder="请输入名称" v-model="model[nameKey]"></el-input>
      </el-form-item>
      <el-form-item :label="roleLabel">
        <el-input placeholder="请输入内容" v-model="model[roleKey]"></el-input>
      </el-form-item>
      <el-form-item label="学历" v-if="type === 'education'">
        <el-select
          placeholder="请选择学历"
          v-model="model[typeKey]"
        >
          <el-option
            v-for="(item, idx) in ['初中及以下', '高中', '专科', '本科', '硕士研究生', '博士研究生']"
            :value="item"
            :label="item"
            :key="idx"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="经历时间">
        <el-date-picker
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          type="monthrange"
          unlink-panels
          v-model="model[dateKey]"
          @change="handleChangeDate"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="内容描述" class="row">
        <el-input
          class="row"
          type="textarea"
          :rows="8"
          resize="none"
          v-model="model[contentKey]"
          @input="handleChangeEditor"
        ></el-input>
      </el-form-item>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience {
  border: 1px solid #eee;
  border-radius: .5rem;
  box-shadow: 0 0 5px #eee;
  overflow: hidden;
  transition: height .3s;
  .show {
    display: flex;
    padding: 1.5rem 1rem;
    border-bottom: 1px solid #eee;
    &:hover {
      .show-right svg {
        visibility: visible;
      }
      h4 {
        color: #00a6a7;
      }
    }
    &-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h4 {
        font-size: 18px;
        margin-bottom: .5rem;
      }
      & > div {
        font-size: 14px;
        display: flex;
        align-items: center;
        span {
          color: gray;
          &.role {
            margin-right: 1rem;
            padding-right: 1rem;
            border-right: 1px solid #ccc;
          }
        }
      }
    }
    &-right {
      & > svg {
        color: gray;
        font-size: 22px;
        margin: 0 .5rem;
        cursor: pointer;
        visibility: hidden;
        &.arrow {
          margin: 0;
          cursor: auto;
          visibility: visible;
        }
      }
    }
  }
  .form {
    display: flex;
    flex-wrap: wrap;
    padding: .5rem 1rem;
    .el-form-item {
      flex-direction: column;
      align-items: flex-start;
      margin-right: 2rem;
      &.row, &:deep(.el-form-item__content) {
        width: 100%;
      }
      .el-select {
        width: 180px;
      }
      .el-input {
        width: 240px;
      }
    }
  }
}
</style>