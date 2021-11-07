// const logger = require('logger').createLogger()
// 定义一个通用的方法来外部调用
// 时间、模块、对象、事件、结果
//
var logger = /** @class */ (function () {
    function logger() {
    }
    logger.prototype.getTime = function () {
        return String(new Date());
    };
    logger.prototype.comonLog = function (msg) {
        var mod = msg.mod, object = msg.object, event = msg.event, result = msg.result;
        return "log warn => \u6A21\u5757\u3001\u5BF9\u8C61\u3001\u4E8B\u4EF6', " + mod + ", " + object + ", " + event + ", '\u7ED3\u679C:'," + result;
    };
    logger.prototype.warn = function (msg) {
        console.warn(this.comonLog(msg));
    };
    logger.prototype.debug = function (msg) {
        console.debug(this.comonLog(msg));
    };
    logger.prototype.info = function (msg) {
        console.info(this.comonLog(msg));
    };
    logger.prototype.error = function (msg) {
        console.info(this.comonLog(msg));
    };
    logger.prototype.trace = function (msg) {
        console.trace(this.comonLog(msg));
    };
    return logger;
}());
// export default new logger()
var log = new logger();
log.trace({
    mod: 'risk',
    object: 'some fn',
    event: 'click',
    result: 'running'
});
