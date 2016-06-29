const base = 'http://api.wiztor.com/';

//模块
const admins = base + 'admin/'; //管理员
const users = base + 'users/';  //用户
const examples = base + 'examples/';  //案例展示
const team = base + 'team/'; //团队风采
const main = base + 'main/'; //主营项目
const partner = base + 'partner/'; //合作伙伴
const suggestions = base + 'suggestions/'; //合作伙伴
const latest = base + 'latest/'; //团队技术动态

// 管理员
export const findAllAmins = admins+'findAll'; // 查找所有管理员   http://api.wiztor.com/admin/findAll/params
export const addAdmin = admins+'addAdmin';   // 添加管理员   http://api.wiztor.com/admin/addAdmin/params
export const updateAdmin = admins+'updateAdmin'; // 更新管理员信息  http://api.wiztor.com/admin/updateAdmin/params
export const delAdmin = admins+'delAdmin';    // 删除管理员  http://api.wiztor.com/admin/delAdmin/params

