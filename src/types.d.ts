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
  sex: '男' | '女' | '',
  /** 工作时间 */
  workDate: any,
  workTime: string,
  /** 生日 */
  birthday: string,
  /** 岁数 */
  age: string,
  /** 邮箱 */
  email: string,
  /** 电话 */
  phone: string,
  /** 微信号 */
  wechat: string,
  /** 期望城市 */
  city: string,
  /** 期望薪资 */
  money: string,
  /** 籍贯 */
  origin: string
}

/**
 * 个人优势
 */
interface IAdvantage {
  // 内容
  content: string,
  contentArr: string[]
}

/**
 * 工作记录
 */
interface IWork {
  /** 公司名称 */
  name: string,
  /** 工作时间 */
  workDate: any,
  workTime: string,
  /** 任职职位 */
  job: string,
  /** 工作内容 */
  content: string,
  contentArr: string[],
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
 * 项目
*/
interface IProject {
  /** 项目名称 */
  name: string,
  /** 担任角色 */
  role: string,
  /** 项目时间 */
  projectDate: any,
  projectTime: string,
  /** 项目描述 */
  desc: string,
  descArr: string[]
}

/**
 * 项目经历
 */
interface IProjectList {
  projects: IProject[]
}

/**
 * 教育
 */
interface IEducation {
  /** 毕业院校 */
  name: string,
  /** 所学专业 */
  role: string,
  /** 学历 */
  grade: '初中及以下' | '高中' | '专科' | '本科' | '硕士研究生' | '博士研究生',
  /** 开始工作时间 */
  educationDate: any,
  educationTime: string,
  /** 在校经历 */
  content: string,
  contentArr: string[]
}

/**
 * 教育经历
 */
interface IEducationList {
  educations: IEducation[]
}

/**
 * 个人兴趣
 */
interface ILike {
  // 内容
  content: string,
  contentArr: string[]
}

/**
 * 个人链接
 */
interface ILink {
  // 内容
  content: string,
  contentArr: string[]
}
