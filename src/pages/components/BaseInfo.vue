<script setup lang="ts">
import { useMainStore } from '@/store/main';

const mainStore = useMainStore();
const { baseInfo } = mainStore;

const handleChangeWorkDate = () => {
  const [startDate, endDate] = baseInfo.workDate;
  const time = endDate.getTime() - startDate.getTime();
  baseInfo.workTime = Math.round(time / 3600 / 24 / 365 / 1000).toString();
}

const handleChangeBirthdayDate = () => {
  const year = (baseInfo.birthday as unknown as Date).getFullYear();
  baseInfo.age = (new Date().getFullYear() - year).toString();
}
</script>

<template>
  <div class="base-info">
    <h3>个人信息</h3>
    <div class="form">
      <el-form :model="baseInfo">
        <el-form-item prop="name" label="姓名">
          <el-input
            placeholder="请输入姓名"
            v-model="baseInfo.name"
            :clearable="true"
          ></el-input>
        </el-form-item>
        <el-form-item prop="job" label="期望职位">
          <el-input
            placeholder="请输入期望职位"
            v-model="baseInfo.job"
            :clearable="true"
          ></el-input>
        </el-form-item>
        <el-form-item prop="sex" label="性别">
          <el-select
            placeholder="请选择性别"
            v-model="baseInfo.sex"
          >
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="sex" label="工作时间">
          <el-date-picker
            start-placeholder="开始时间"
            end-placeholder="截止时间"
            v-model="baseInfo.workDate"
            type="monthrange"
            unlink-panels
            @change="handleChangeWorkDate"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="birthday" label="出生年月">
          <el-date-picker
            placeholder="请选择时间"
            v-model="baseInfo.birthday"
            type="month"
            @change="handleChangeBirthdayDate"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="email" label="电子邮箱">
          <el-input
            placeholder="请输入电子邮箱"
            v-model="baseInfo.email"
            :clearable="true"
          ></el-input>
        </el-form-item>
        <el-form-item prop="phone" label="电话">
          <el-input
            placeholder="请输入手机号码"
            v-model="baseInfo.phone"
            :clearable="true"
          ></el-input>
        </el-form-item>
        <el-form-item prop="wechat" label="微信号">
          <el-input
            placeholder="请输入微信号"
            v-model="baseInfo.wechat"
            :clearable="true"
          ></el-input>
        </el-form-item>
        <el-form-item prop="city" label="期望城市">
          <el-input
            placeholder="请输入期望城市"
            v-model="baseInfo.city"
            :clearable="true"
          ></el-input>
        </el-form-item>
        <el-form-item prop="money" label="期望薪资">
          <el-select
            placeholder="请选择期望薪资"
            v-model="baseInfo.money"
          >
            <el-option label="面议" value="0"></el-option>
            <el-option
              v-for="idx in 20"
              :label="`${idx}k`"
              :value="`${idx}k`"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="origin" label="籍贯">
          <el-input
            placeholder="请输入籍贯"
            v-model="baseInfo.origin"
            :clearable="true"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>