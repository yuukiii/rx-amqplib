"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertQueueReply = /** @class */ (function () {
    function AssertQueueReply(channel, reply) {
        this.channel = channel;
        this.queue = reply.queue;
        this.messageCount = reply.messageCount;
        this.consumerCount = reply.consumerCount;
    }
    return AssertQueueReply;
}());
exports.default = AssertQueueReply;
