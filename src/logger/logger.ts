// const logger = require('logger').createLogger()

// console.log('logger', logger)

// 补上ts类型
// logger.log('hello world')// 普通日志打印
// logger.info('hello world')// 等同于logger.log
// logger.error('hello world')// 错误日志打印
// logger.warn('hello world')// 等同于logger.error

// 实时调试日志（console.trace）——重要数据状态被修改前后、关键函数调用，帮助研发了解系统内部工作状态细节，用于定位系统故障（五元组 + 关键数据）
// 调试日志（console.debug）——异常信息，帮助研发了解系统关键活动，用于排除故障
// 信息日志（console.info）——告知用户系统发生过的重要事件，帮助用户了解系统工作状态
// 告警日志（console.warn）——系统可能处于不正常状态，需要告知用户介入（五元组 + 建议）
// 错误日志（console.error）—— 需要管理员的干预，不干预会出现一段时间内的功能不正常（五元组 + 建议）


interface logMsg {
    mod: string
    object: string
    event: string
    result: string
}
// 定义一个通用的方法来外部调用
// 时间、模块、对象、事件、结果
//
class logger {
  constructor(){
  }
  getTime ():string {
    return String(new Date())
  }

  comonLog (msg: logMsg):string {
    const { mod, object, event, result } = msg
    return `log warn => 模块、对象、事件', ${mod}, ${object}, ${event}, '结果:',${result}`
  }

  warn (msg:logMsg):void {
    console.warn(this.comonLog(msg))
  }

  debug (msg:logMsg):void {
    console.debug(this.comonLog(msg))
  }

  info (msg:logMsg):void {
    console.info(this.comonLog(msg))
  }

  error (msg:logMsg):void {
    console.info(this.comonLog(msg))
  }

  trace (msg: logMsg):void {
    console.trace(this.comonLog(msg))
  }
}

export default new logger()
// explame
// const log = new logger()
// log.trace({
//   mod: 'risk',
//   object: 'some fn',
//   event: 'click',
//   result: 'running',
// })
