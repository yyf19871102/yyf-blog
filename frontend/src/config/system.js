/**
 * Created by 杨羽飞 on 2018/02/08.
 * 系统相关配置
 */
module.exports = {
  SALT            : 'YYFANDHJM',  // 密钥
  //DOMAIN          : 'http://dl.paibayouxi.com',
  DOMAIN          : 'http://192.168.102.251:9000', // 本地地址
  VERSION         : '0.0.1',
  ADMIN_NAME      : 'YYF的博客后台',
  CLIENT_NAME     : 'YYF的博客',
  
  ROWS            : 10, // 每页10条数据

  URL             : {
    ADMIN_PAGE_LOGIN  : '/admin/login', // 后台登录页面
  },
  
  /** 通知类型 **/
  NOTIFY_TYPE     : {
    SUCCESS       : 1,  // 成功
    WARN          : 2,  // 警告
    FAIL          : 3,  // 失败
  }
};
