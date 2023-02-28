import { defineStore } from 'pinia';
import Base from '@/template/Base.vue';
import { clone } from '@/utils/hooks';

export const useMainStore = defineStore('mainStore', {
  state: () => {
    const baseInfo = $ref<IBaseInfo>({
      /** 姓名 */
      name: '',
      /** 头像 */
      avatar: '',
      /** 期望职位 */
      job: '',
      /** 性别 */
      sex: '',
      /** 开始工作时间 */
      /** 截止工作时间 */
      workDate: [],
      workTime: '',
      /** 生日 */
      birthday: '',
      /** 岁数 */
      age: '',
      /** 邮箱 */
      email: '',
      /** 电话 */
      phone: '',
      /** 微信号 */
      wechat: '',
      /** 期望城市 */
      city: '',
      /** 期望薪资 */
      money: '',
      /** 籍贯 */
      origin: ''
    });
    const advantage = $ref<IAdvantage>({
      content: '',
      contentArr: []
    })
    const work = $ref<IWorkList>({
      works: []
    });
    const project = $ref<IProjectList>({
      projects: []
    });
    const education = $ref<IEducationList>({
      educations: []
    });
    const like = $ref<ILike>({
      content: '',
      contentArr: []
    });
    const link = $ref<ILink>({
      content: '',
      contentArr: []
    })
    return {
      baseInfo,
      advantage,
      work,
      project,
      education,
      like,
      link
    }
  },
  actions: {
    initData() {
      this.baseInfo = {
        /** 姓名 */
        name: '',
        /** 头像 */
        avatar: '',
        /** 期望职位 */
        job: '',
        /** 性别 */
        sex: '',
        /** 开始工作时间 */
        /** 截止工作时间 */
        workDate: [],
        workTime: '',
        /** 生日 */
        birthday: '',
        /** 岁数 */
        age: '',
        /** 邮箱 */
        email: '',
        /** 电话 */
        phone: '',
        /** 微信号 */
        wechat: '',
        /** 期望城市 */
        city: '',
        /** 期望薪资 */
        money: '',
        /** 籍贯 */
        origin: ''
      }
      this.advantage = {
        content: '',
        contentArr: []
      }
      this.work = {
        works: []
      }
      this.project = {
        projects: []
      }
      this.education = {
        educations: []
      }
      this.like = {
        content: '',
        contentArr: []
      }
      this.link = {
        content: '',
        contentArr: []
      }
    },
    updateValue(data: IForm) {
      for (const key in data) {
        this.$state[key as keyof IForm] = clone(data[key as keyof IForm]);
      }
    }
  },
  persist: true
});

export const usePersonalStore = defineStore('personalStore', {
  state: (): {
    myTemps: {
      [prop: string]: {
        data: IForm,
        cover: string,
        name: string,
        time: number
      }
    }
  } => {
    return {
      myTemps: {}
    }
  },
  persist: true
});

export const useCompStore = defineStore('compStore', {
  state: () => {
    const isShowRightBar = $ref(false);
    const currentTemplate = shallowRef<Component>(Base);
    const currentTempType = $ref('base');
    const orderList = $ref([ref(0), ref(1), ref(2), ref(3), ref(4), ref(5), ref(6)]);
    return {
      isShowRightBar,
      currentTemplate,
      currentTempType,
      orderList
    }
  }
});
