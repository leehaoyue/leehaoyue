import Vue from 'vue'

Vue.prototype.$globaldata = {
  statusColor: [{
    color: '#F75A05' // 橙色
  }, {
    color: '#67C23A' // 绿色
  }, {
    color: '#409EFF' // 蓝色
  }, {
    color: '#001529' // 黑色
  }, {
    color: '#F56C6C' // 红色
  }, {
    color: '#7948EA' // 紫色
  }, {
    color: '#909399' // 灰色
  }],
  title: ['申请任务', '新建任务', '任务详情'], // 表单标题
  assort: ['上班', '休息'], // 人员状态
  dutyList: [{ // 职责
    value: '0',
    label: '未选择'
  }, {
    value: '1',
    label: '负责人'
  }, {
    value: '2',
    label: '配合人'
  }, {
    value: '3',
    label: '参与人'
  }],
  statusList: { // 任务详情（状态）
    limitIndex: 3,
    list: ['待批准', '执行中', '待审核', '完成', '驳回', '失败', '取消']
  },
  taskList: { // 任务清单列表（状态）
    assort: ['待批准', '执行中', '待审核', '已关闭'],
    statusList: ['待批准', '执行中', '待审核', '完成', '失败', '驳回', '取消']
  },
  imgUpload: { // 图片上传、删除
    serviceUpload: '/api/upload', // 上传图片地址
    serviceDelete: '/api/delete', // 删除图片地址
    url: '[imgPath]', // 图片服务器地址
    hash: '[imgHash]' // 随机字符串，用于删除文件
  },
  tabList: [{
    id: 0,
    label: '常态任务',
    icon: 'fa fa-tasks'
  }, {
    id: 1,
    label: '任务类型',
    icon: 'fa fa-tags'
  }, {
    id: 2,
    label: '人员管理',
    icon: 'fa fa-users'
  }, {
    id: 3,
    label: '闭环任务',
    icon: 'fa fa-list-alt'
  }],
  interfaceMapping: (key) => { // 接口映射（错误提示）
    return {
      '/admin/org/all': '获取所有用户 - 失败',
      '/admin/daily/allGroup': '获取常态任务组 - 失败',
      '/admin/daily/addGroup': '添加常态任务组 - 失败',
      '/admin/daily/updateGroup': '更新常态任务组 - 失败',
      '/admin/daily/allConfig': '获取所有常态任务 - 失败',
      '/admin/daily/addConfig': '添加常态任务 - 失败',
      '/admin/daily/updateConfig': '更新常态任务 - 失败',
      '/admin/daily/oidDailyType': '获取班组常态任务 - 失败',
      '/admin/daily/addOidDailyType': '添加班组常态任务 - 失败',
      '/admin/daily/updateOidDailyType': '更新班组常态任务 - 失败',
      '/admin/daily/deleteOidDailyType': '删除班组常态任务 - 失败',
      '/admin/type/allGroup': '获取任务类型组 - 失败',
      '/admin/type/addGroup': '添加任务类型组 - 失败',
      '/admin/type/updateGroup': '更新任务类型组 - 失败',
      '/admin/type/allType': '获取所有任务类型 - 失败',
      '/admin/type/addType': '添加任务类型 - 失败',
      '/admin/type/updateType': '更新任务类型 - 失败',
      '/admin/type/oidType': '获取班组任务类型 - 失败',
      '/admin/type/updateOidType': '更新班组任务类型 - 失败',
      '/admin/type/addOidType': '添加班组任务类型 - 失败',
      '/admin/type/deleteOidType': '删除班组任务类型 - 失败',
      '/admin/org/depts': '获取所有下级部门列表 - 失败',
      '/admin/org/getOrgByDept': '根据钉钉部门id获取班组信息 - 失败',
      '/admin/org/getStaff': '获取某班组下用户 - 失败',
      '/admin/org/update': '修改用户班组 - 失败',
      '/admin/task/allClose': '获取所有闭环任务 - 失败',
      '/task/info': '获取任务详情 - 失败',
      '/task/clearCache': '清理任务缓存 - 失败',
      '/admin/evaluate/clearCache': '清理评价缓存 - 失败',
      '/admin/org/clearCache': '清理人员缓存 - 失败',
      '/admin/daily/clearCache': '清理常态类型缓存 - 失败',
      '/admin/type/clearCache': '清理任务类型缓存 - 失败',
      '/admin/index/clearCache': '清理所有缓存 - 失败'
    }[key] || '服务器错误，请重试！'
  }
}
