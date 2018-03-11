"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PurgeQueueReply = /** @class */ (function () {
    function PurgeQueueReply(channel, deleteQueue) {
        this.channel = channel;
        this.messageCount = deleteQueue.messageCount;
    }
    return PurgeQueueReply;
}());
exports.default = PurgeQueueReply;
