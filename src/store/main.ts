import { defineStore } from 'pinia';

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
  }
});
