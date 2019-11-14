import $mock from '@/mock/index.js';

export default {
  '/foreword/tabPage': {
    isMock: true,
    errmsg: '获取前言内容 - 失败',
    data: () => {
      return $mock('/foreword/tabPage');
    }
  },
  '/project/wordClouds': {
    isMock: true,
    errmsg: '获取项目词云内容 - 失败',
    data: () => {
      return $mock('/project/wordClouds');
    }
  },
  '/project/card': {
    isMock: true,
    errmsg: '获取项目目录 - 失败',
    data: () => {
      return $mock('/project/card');
    }
  },
  '/blog/card': {
    isMock: true,
    errmsg: '获取博客目录 - 失败',
    data: () => {
      return $mock('/blog/card');
    }
  }
}