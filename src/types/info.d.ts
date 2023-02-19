/**
 * 基本信息
 */
interface IBaseInfo {
  /** 姓名 */
  name: string,
  /** 头像 */
  avatar: string,
  /** 期望职位 */
  job: string,
  /** 性别 */
  sex: '男' | '女',
  /** 开始工作时间 */
  startDate: string,
  /** 截止工作时间 */
  endDate: string,
  /** 邮箱 */
  email: string,
  /** 电话 */
  phone: string,
  /** 微信号 */
  wechat: string,
  /** 期望城市 */
  city: string,
  /** 期望薪资 */
  money: number,
  /** 籍贯 */
  origin: string
}

/**
 * 个人优势
 */
interface IAdvantage {
  content: string
}

/**
 * 工作记录
 */
interface IWork {
  /** 公司名称 */
  name: string,
  /** 开始工作时间 */
  startDate: string,
  /** 截止工作时间 */
  endDate: string,
  /** 任职职位 */
  job: string,
  /** 工作内容 */
  content: string,
  /** 工作成绩 */
  result: string
}

/**
 * 工作经历
 */
interface IWorkList {
  works: IWork[]
}

/**
 * 项目经历
*/
interface IProject {
  /** 项目名称 */
  name: string,
  /** 担任角色 */
  role: string,
  /** 开始工作时间 */
  startDate: string,
  /** 截止工作时间 */
  endDate: string,
  /** 项目描述 */
  desc: string,
  /** 工作成绩 */
  result: string
}

/**
 * 教育经历
 */
interface IEducation {
  /** 毕业院校 */
  name: string,
  /** 学历 */
  grade: '初中及一下' | '高中' | '专科' | '本科' | '硕士',
  /** 开始工作时间 */
  startDate: string,
  /** 截止工作时间 */
  endDate: string,
  /** 在校经历 */
  content: string
}
