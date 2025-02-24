// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export interface IDesktop {
  isDesktop: boolean
}

export const isSmallScreen = (): boolean => document.body.clientWidth < 767

export const NO_MOTION_PREFERENCE_QUERY = '(prefers-reduced-motion: no-preference)'

export const METADATA = {
  title: 'wh | home',
  description:
    '我在设计和开发之间架起了桥梁',
  siteUrl: 'http://note.wenhaohub.cn/',
}

export const MENULINKS = [
  {
    name: 'Home',
    ref: 'home',
  },
  {
    name: 'Works',
    ref: 'works',
  },
  {
    name: 'Skills',
    ref: 'skills',
  },
  {
    name: 'Timeline',
    ref: 'timeline',
  },
  {
    name: 'Contact',
    ref: 'contact',
  },
]

export const TYPED_STRINGS = [
  '一名前端开发工程师',
  '也可以是cv码农',
  '不做技术的崇拜者',
  '只做业务的服务者',
]

export const EMAIL = 'ayush.singh.xda@gmail.com'

export const SOCIAL_LINKS = {
  qq: 'https://github.com/WenHaoHub',
  wechat: 'https://github.com/WenHaoHub',
  // linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/WenHaoHub',
  // medium: 'https://alphaayush.medium.com/',
  // instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com',
  // dribbble: 'https://dribbble.com',
  // behance: 'https://www.behance.net',
  twitter: 'https://x.com/luwnho15',
  // topmate: 'https://www.topmate.io/alphaayush/',
} as Record<string, string>

export interface IProject {
  name: string
  image: string
  blurImage: string
  description: string
  gradient: [string, string]
  url: string
  tech: string[]
}

export const PROJECTS: IProject[] = [
  {
    name: '公司开发脚手架',
    image: '/projects/figgen.jpg',
    blurImage: '/projects/blur/figgen-blur.jpg',
    description: '快速构建你的web开发模板',
    gradient: ['#1F6582', '#1ABCFE'],
    url: 'https://github.com/WenHaoHub/code-dev',
    tech: ['typescript', 'vue', 'tailwind'],
  },
  {
    name: 'js工具库',
    image: '/projects/ngx-quill-upload.jpg',
    blurImage: '/projects/blur/ngx-quill-upload-blur.jpg',
    description: '常用的js工具，减少过多的三方依赖带来的维护问题',
    gradient: ['#3A0000', '#771E1E'],
    url: 'https://github.com/WenHaoHub/code-dev',
    tech: ['npm', 'gsap', 'typescript'],
  },
  {
    name: '可视图标库',
    image: '/projects/myokr.jpg',
    blurImage: '/projects/blur/myokr-blur.jpg',
    description: '开发可视化业务的组件库，包含了常用的图形',
    gradient: ['#153BB9', '#0E2C8B'],
    url: 'https://minio.wisesoft.net.cn/wisesoft-doc/chart/index.html#/',
    tech: ['javaScript', 'npm', 'vue'],
  },

  // {
  //   name: 'DLT Labs Website',
  //   image: '/projects/dlt-website.jpg',
  //   blurImage: '/projects/blur/dlt-website-blur.jpg',
  //   description: 'Marketing site with an Internal CMS from scratch',
  //   gradient: ['#245B57', '#004741'],
  //   url: 'https://www.dltlabs.com/',
  //   tech: ['figma', 'angular', 'gsap'],
  // },
  // {
  //   name: 'DL Unify',
  //   image: '/projects/dl-unify.jpg',
  //   blurImage: '/projects/blur/dl-unify-blur.jpg',
  //   description: 'Built the application from zero to production 🚀',
  //   gradient: ['#003052', '#167187'],
  //   url: 'https://dlunify.com/',
  //   tech: ['tailwind', 'angular', 'gsap', 'figma'],
  // },
  
  // {
  //   name: 'Huminos website',
  //   image: '/projects/huminos.jpg',
  //   blurImage: '/projects/blur/huminos-blur.jpg',
  //   description: 'Marketing site for Huminos bots for workplace by facebook',
  //   gradient: ['#17007B', '#3A2C79'],
  //   url: 'https://bots.huminos.com/',
  //   tech: ['javascript', 'sass', 'svg', 'gulp'],
  // },
  // {
  //   name: 'AKGEC - College Website',
  //   image: '/projects/akgec.jpg',
  //   blurImage: '/projects/blur/akgec-blur.jpg',
  //   description: 'Contributed in overall design and development',
  //   gradient: ['#5E4C06', '#746528'],
  //   url: 'https://www.akgec.ac.in/',
  //   tech: ['javascript', 'html', 'css'],
  // },
  // {
  //   name: 'Alpha Aesthetics',
  //   image: '/projects/alpha.jpg',
  //   blurImage: '/projects/blur/alpha-blur.jpg',
  //   description: 'Designed and developed the platform',
  //   gradient: ['#172839', '#334659'],
  //   url: 'https://alpha-aesthetics.ayushsingh.net/',
  //   tech: ['illustrator', 'javascript', 'angular'],
  // },
  // {
  //   name: 'Amantrya - Polling Web App',
  //   image: '/projects/farewell18.jpg',
  //   blurImage: '/projects/blur/farewell18-blur.jpg',
  //   description: 'Dark mode dated from 2017 🔥',
  //   gradient: ['#142D46', '#2E4964'],
  //   url: 'https://farewell18.ayushsingh.net/',
  //   tech: ['javascript', 'html', 'css'],
  // },
  // {
  //   name: 'BDC 2018 Web Portal',
  //   image: '/projects/bdc18.jpg',
  //   blurImage: '/projects/blur/bdc18-blur.jpg',
  //   description: 'Built the portal from zero to production 🚀',
  //   gradient: ['#470700', '#712A23'],
  //   url: 'https://bdc2018.ayushsingh.net/',
  //   tech: ['javascript', 'html', 'css'],
  // },
  // {
  //   name: 'Scrolls 2017 - Website',
  //   image: '/projects/scrolls.jpg',
  //   blurImage: '/projects/blur/scrolls-blur.jpg',
  //   description: 'Built the portal from zero to production 🚀',
  //   gradient: ['#685506', '#7B6921'],
  //   url: 'https://scrolls-17.ayushsingh.net/',
  //   tech: ['angular', 'html', 'css'],
  // },
  // {
  //   name: 'Cardize - Visiting Cards',
  //   image: '/projects/cardize.jpg',
  //   blurImage: '/projects/blur/cardize-blur.jpg',
  //   description: 'First web project! Custom visiting card generator',
  //   gradient: ['#552A04', '#614023'],
  //   url: 'https://cardize.ayushsingh.net/',
  //   tech: ['javascript', 'html', 'css'],
  // },
]

export const SKILLS = {
  frontend: ['html', 'css', 'javascript','vue','react', 'redux', 'tailwind', 'sass', 'svg', ],
  // frontend: ['html', 'css', 'javascript','vue','react', 'redux', 'next', 'angular', 'gsap', 'tailwind', 'sass', 'svg', ],
  userInterface: ['figma','illustrator', 'photoshop'],
  // userInterface: ['figma',vue 'sketch', 'illustrator', 'photoshop'],
  other: ['git', 'webpack', ],
  // other: ['git', 'webpack', 'gulp', 'lightroom', 'aftereffects'],
}

export enum Branch {
  LEFT = 'leftSide',
  RIGHT = 'rightSide',
}

export enum NodeTypes {
  CONVERGE = 'converge',
  DIVERGE = 'diverge',
  CHECKPOINT = 'checkpoint',
}

export enum ItemSize {
  SMALL = 'small',
  LARGE = 'large',
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: '2024',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '前端工程师',
    size: ItemSize.SMALL,
    subtitle: '政企协同部可视化业务组组长',
    image: '/timeline/hotstar.svg',
    slideImage: '/timeline/cdzs.png',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2021',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '前端开工程师',
    size: ItemSize.SMALL,
    subtitle: '蓉城人才卡服务提供商😎',
    image: '/timeline/flipkart.svg',
    slideImage: '/timeline/flipkart.gif',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2019',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '自由职业',
    size: ItemSize.SMALL,
    subtitle: '构建web框架知识体系🎯',
    image: '/timeline/huminos.svg',
    slideImage: '/timeline/w3c.png',
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: 'UI',
    size: ItemSize.SMALL,
    subtitle: '产品发布的动态内容 🚀',
    image: '/timeline/octanner.svg',
    slideImage: '/timeline/aftereffects.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2019',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: 'UI Engineer',
  //   size: ItemSize.SMALL,
  //   subtitle: 'Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.',
  //   image: '/timeline/dltlabs.svg',
  //   slideImage: '/timeline/dlt-website.jpg',
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: 'UX Engineer',
  //   size: ItemSize.SMALL,
  //   subtitle: 'First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook',
  //   image: '/timeline/huminos.svg',
  //   slideImage: '/timeline/huminos-website.jpg',
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: 'Graduated from College 🎓',
  //   size: ItemSize.SMALL,
  //   subtitle: 'Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!',
  //   image: '/timeline/akgec.svg',
  //   slideImage: '/timeline/farewell.jpg',
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: '2018',
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.DIVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: 'Student lead at SDC-SI',
  //   size: ItemSize.SMALL,
  //   subtitle: 'Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.',
  //   image: '/timeline/si.svg',
  //   slideImage: '/timeline/si-head.jpg',
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: 'Lecture on SVG animations',
  //   size: ItemSize.SMALL,
  //   subtitle: 'Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI',

  //   slideImage: '/timeline/svg-lecture.jpg',
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: '2017',
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: '1st position in Web Designing, IMSU',
  //   size: ItemSize.SMALL,
  //   subtitle: 'Competed against 20+ teams for design and development of web project from scratch',
  //   slideImage: '/timeline/ims-17.jpg',
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: 'Lecture on Javascript',
  //   size: ItemSize.SMALL,
  //   subtitle: 'Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI',
  //   slideImage: '/timeline/js-17.jpg',
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: '1st position in Web Design, ABES ACM',
  //   size: ItemSize.SMALL,
  //   subtitle: 'Competed in web and graphic design challenge with 100+ participants.',
  //   slideImage: '/timeline/abes-17.jpg',
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: 'Lecture on Web Technologies',
  //   size: ItemSize.SMALL,
  //   subtitle: 'Guided 300+ students on getting started with web technologies like HTML/CSS and JS',
  //   slideImage: '/timeline/web-17.jpg',
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: '2016',
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: '1st position in Web Designing, IMSU',
  //   size: ItemSize.SMALL,
  //   subtitle: 'Secured 1st prize in Web design challenge against 50+ teams',
  //   slideImage: '/timeline/ims-16.jpg',
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CONVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: '',
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: 'UI/UX, Frontend Engineer',
  //   size: ItemSize.SMALL,
  //   subtitle: 'Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...',
  //   image: '/timeline/si.svg',
  //   slideImage: '/timeline/si-start.jpg',
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2018',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '毕业实习',
    size: ItemSize.SMALL,
    subtitle:
      '有的故事从这里开始，也有的事情也从这一刻结束了',
    image: '/timeline/xda.svg',
    slideImage: '/timeline/by.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
]

export type TimelineNodeV2 = CheckpointNode | BranchNode

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT
  title: string
  subtitle?: string
  size: ItemSize
  image?: string
  slideImage?: string
  shouldDrawLine: boolean
  alignment: Branch
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE
}

export const GTAG = 'UA-163844688-1'
