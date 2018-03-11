"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertExchangeReply = /** @class */ (function () {
    function AssertExchangeReply(channel, reply) {
        this.channel = channel;
        this.exchange = reply.exchange;
    }
    return AssertExchangeReply;
}());
exports.default = AssertExchangeReply;
