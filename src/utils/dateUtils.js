/*
包含n个日期时间处理的工具函数模块
*/

/*
  格式化日期
*/
export function formateDate(time) {
  if (!time) return ''
  let date = new Date(time)
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1) + '-';
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  let h = (date.getHours() < 10 ? '0'+ date.getHours(): date.getHours()) + ':';
  let m = (date.getMinutes() < 10 ? '0'+ date.getMinutes(): date.getMinutes()) + ':';
  let s = (date.getSeconds() < 10 ? '0'+ date.getSeconds(): date.getSeconds());
  return Y + M + D + h + m + s;
}
