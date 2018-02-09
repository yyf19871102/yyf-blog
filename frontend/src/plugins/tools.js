/**
 * Created by 杨羽飞 on 2018/02/08.
 * 常用工具插件和统一处理插件
 */
const axios     = require('axios');

const SYS_CONST = require('../config/system');
const utils     = require('../common/utils');

let Tools = {};
Tools.install = function (Vue, options) {
  // 常量集合
  Vue.prototype.$const = SYS_CONST;
  
  // axios绑定
  Vue.prototype.$http = axios;
  
  // axios绑定并处理封装
  Vue.prototype.$Http = function(vue, config, callback){
    axios(config).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        callback && callback(res.data)
      } else if (res.data.code === 301) {
        // 301权限错误直接重定向到后台登陆页面
        vue.$router.push({path: SYS_CONST.URL.ADMIN_PAGE_LOGIN})
      } else if (res.data.code !== 0) {
        // 登录失败情况
        vue.showMsg = true;
        vue.msg = res.data.msg;
        vue.msgType = SYS_CONST.NOTIFY_TYPE.FAIL;
        setTimeout(() => {vue.showMsg = false}, 3000);
      } else {
        vue.showMsg = true;
        vue.msg = res.status !== 200 ? `网络错误：${res.status}` : res.data.msg;
        vue.msgType = SYS_CONST.NOTIFY_TYPE.FAIL;
        setTimeout(() => {vue.showMsg = false}, 3000);
      }
    }).catch(err => {
      console.error(err);
      vue.showMsg = true;
      vue.msg = err.message;
      vue.msgType = SYS_CONST.NOTIFY_TYPE.FAIL;
      setTimeout(() => {vue.showMsg = false}, 3000);
    })
  };
  
  /** 处理弹框事件 **/
  Vue.prototype.$alert = function (vue, msgType, msg, time) {
    vue.showMsg = true;
    vue.msgType = msgType;
    vue.msg = msg;
    setTimeout(() => {vue.showMsg = false}, time || 3000);
  }
  Vue.prototype.$utils = utils;
}
module.exports = Tools;
