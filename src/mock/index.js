import Vue from 'vue'

const Mock = require('mockjs')

Vue.prototype.$mock = () => {
  return Mock.mock({
    'init|1': [{ // 测试用户id
      department: [75751005],
      userid: '01010003738',
      name: '吴晓冬',
      jobnumber: '01010003738',
      isAdmin: true
    }, {
      department: [75751005],
      userid: '01010010315',
      name: '冲莉',
      jobnumber: '01010010315',
      isAdmin: true
    }],
    setInit: {
      admin: { // 手动设置测试用户id
        department: [75751005],
        userid: '01010003738',
        name: '吴晓东',
        jobnumber: '01010003738',
        isAdmin: true
      },
      usr: {
        department: [75751005],
        userid: '01010010315',
        name: '冲莉',
        jobnumber: '01010010315',
        isAdmin: true
      }
    },
    '/daily/getDailyBranch|0-20': [{ // 常态任务班组
      id: () => {
        return Mock.Random.id()
      },
      branch: () => {
        return Mock.Random.ctitle()
      },
      'children|0-10': [{
        id: () => {
          return Mock.Random.id()
        },
        branch: () => {
          return Mock.Random.ctitle()
        },
        'children|0-10': [{
          id: () => {
            return Mock.Random.id()
          },
          branch: () => {
            return Mock.Random.ctitle()
          }
        }]
      }]
    }],
    '/daily/getDailyTask|20-30': [{ // 常态任务
      sn: () => { // 任务编号
        return Mock.Random.id()
      },
      time: () => { // 任务耗时
        return Mock.Random.integer(5, 48)
      },
      content: () => { // 任务名称
        return Mock.Random.ctitle(5, 10)
      }
    }],
    '/daily/getDailyTaskGroup|0-20': [{ // 常态任务（类型、类型组）
      id: () => {
        return Mock.Random.id()
      },
      type: () => {
        return Mock.Random.ctitle()
      },
      'children|0-10': [{
        id: () => {
          return Mock.Random.id()
        },
        type: () => {
          return Mock.Random.ctitle()
        }
      }]
    }],
    '/daily/addNormalTask|20-30': [{ // 添加常态任务
      sn: () => { // 任务编号
        return Mock.Random.id()
      },
      time: () => { // 任务耗时
        return Mock.Random.integer(5, 48)
      },
      content: () => { // 任务名称
        return Mock.Random.ctitle(5, 10)
      }
    }],
    '/daily/subNormalTask|20-30': [{ // 删除常态任务
      sn: () => { // 任务编号
        return Mock.Random.id()
      },
      time: () => { // 任务耗时
        return Mock.Random.integer(5, 48)
      },
      content: () => { // 任务名称
        return Mock.Random.ctitle(5, 10)
      }
    }],
    '/task/getTaskBranch|0-20': [{ // 任务类型班组
      id: () => {
        return Mock.Random.id()
      },
      branch: () => {
        return Mock.Random.ctitle()
      },
      'children|0-10': [{
        id: () => {
          return Mock.Random.id()
        },
        branch: () => {
          return Mock.Random.ctitle()
        },
        'children|0-10': [{
          id: () => {
            return Mock.Random.id()
          },
          branch: () => {
            return Mock.Random.ctitle()
          }
        }]
      }]
    }],
    '/task/getTaskType|10-15': [{ // 任务类型
      sn: () => { // 类型编号
        return Mock.Random.id()
      },
      weight: () => { // 任务权重
        return Mock.Random.integer(1, 10)
      },
      type: () => { // 类型名称
        return Mock.Random.cword(3, 5)
      }
    }],
    '/task/getTaskTypeGroup|0-20': [{ // 任务类型（类型、类型组）
      id: () => {
        return Mock.Random.id()
      },
      type: () => {
        return Mock.Random.ctitle()
      },
      'children|0-10': [{
        id: () => {
          return Mock.Random.id()
        },
        type: () => {
          return Mock.Random.ctitle()
        }
      }]
    }],
    '/task/addTaskType|10-15': [{ // 添加任务类型
      sn: () => { // 类型编号
        return Mock.Random.id()
      },
      weight: () => { // 任务权重
        return Mock.Random.integer(1, 10)
      },
      type: () => { // 类型名称
        return Mock.Random.cword(3, 5)
      }
    }],
    '/task/subTaskType|10-15': [{ // 删除任务类型
      sn: () => { // 类型编号
        return Mock.Random.id()
      },
      weight: () => { // 任务权重
        return Mock.Random.integer(1, 10)
      },
      type: () => { // 类型名称
        return Mock.Random.cword(3, 5)
      }
    }],
    '/admin/org/depts|0-20': [{ // 人员调配所有组织
      id: () => {
        return Mock.Random.id()
      },
      name: () => {
        return Mock.Random.ctitle()
      },
      'children|0-10': [{
        id: () => {
          return Mock.Random.id()
        },
        name: () => {
          return Mock.Random.ctitle()
        }
      }]
    }],
    '/user/moveMember|30-50': [{ // 移动人员调配
      id: () => {
        return Mock.Random.id()
      },
      name: () => {
        return Mock.Random.cname()
      },
      accept: () => {
        return Mock.Random.boolean()
      }
    }],
    '/user/getAllMember|30-50': [{ // 所有成员
      id: () => {
        return Mock.Random.id()
      },
      name: () => {
        return Mock.Random.cname()
      }
    }],
    '/admin/task/allClose|30-50': [{ // 闭环任务
      sn: () => { // 任务编号
        return Mock.Random.id()
      },
      place: () => { // 地点编号
        return Mock.Random.integer(1000, 9999)
      },
      principal_name: () => {
        return Mock.Random.cname()
      },
      place_name: () => { // 位置
        return Mock.Random.cword(3, 5)
      },
      type: () => { // 类型编号
        return Mock.Random.integer(1000, 9999)
      },
      type_name: () => { // 类型
        return Mock.Random.cword(3, 5)
      },
      device: () => { // 故障设备编号
        return Mock.Random.integer(1000, 9999)
      },
      emergent: () => { // 是否故障抢修
        return Mock.Random.boolean()
      },
      primary: () => { // 是否是生产工作
        return Mock.Random.boolean()
      },
      deadline: () => { // 期望截止时间
        return Mock.Random.datetime()
      },
      delay: () => { // 是否超时
        return Mock.Random.boolean()
      },
      status: () => { // 任务状态
        return Mock.Random.integer(0, 6)
      },
      oid: () => { // 组织编号
        return Mock.Random.integer(1000, 9999)
      },
      name: () => { // 负责人名称
        return Mock.Random.cname()
      }
    }],
    '/task/info': { // 任务详情
      sn: () => { // 任务编号
        return Mock.Random.id()
      },
      place: () => { // 地点编号
        return Mock.Random.integer(1000, 9999)
      },
      principal_name: () => {
        return Mock.Random.cname()
      },
      place_name: () => { // 位置
        return Mock.Random.cword(3, 5)
      },
      type: () => { // 类型编号
        return Mock.Random.id()
      },
      type_name: () => { // 类型
        return Mock.Random.cword(3, 5)
      },
      device: () => { // 故障设备编号
        return Mock.Random.id()
      },
      emergent: () => { // 是否故障抢修
        return Mock.Random.boolean()
      },
      primary: () => { // 是否是生产工作
        return Mock.Random.boolean()
      },
      start_plan: () => { // 期望开始时间
        return Mock.Random.datetime()
      },
      deadline: () => { // 期望截止时间
        return Mock.Random.datetime()
      },
      delay: () => { // 是否超时
        return Mock.Random.boolean()
      },
      status: () => { // 当前任务状态
        return Mock.Random.cword(2, 3)
      },
      'task_status|1-6': [ // 所有任务状态
        () => {
          return Mock.Random.cword(2, 3)
        }
      ],
      oid: () => { // 组织编号
        return Mock.Random.id()
      },
      name: () => { // 负责人名称
        return Mock.Random.cname()
      },
      order: () => { // 工单号
        return Mock.Random.id()
      },
      remark: () => { // 备注
        return Mock.Random.csentence()
      },
      'participant|5-10': [{ // 人员安排
        id: () => { // 工号
          return Mock.Random.id()
        },
        name: () => {
          return Mock.Random.cname()
        },
        receive: () => { // 接收时间
          return Mock.Random.datetime()
        },
        'role|1': ['负责人', '参与人', '配合人'] // 角色
      }]
    }
  })
}
