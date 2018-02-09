/**
 * Created by yinghe on 2017/8/31.
 */
module.exports = {
  getNowFormatDate : function() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
      + " " + date.getHours() + seperator2 + date.getMinutes()
      + seperator2 + date.getSeconds();
    return currentdate;
  },
  
  // 格式化时间
  formatDatetime: function(datetime) {
    if (!datetime) {
      return "[null]";
    } else {
      let date = new Date(Date.parse(datetime));
      let year = date.getFullYear(), month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : ('0' + (date.getMonth() + 1));
      let day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();
      return year + '-' + month + '-' + day;
    }
  },
}
