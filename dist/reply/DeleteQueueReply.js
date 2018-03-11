"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeleteQueueReply = /** @class */ (function () {
    function DeleteQueueReply(channel, deleteQueue) {
        this.channel = channel;
        this.messageCount = deleteQueue.messageCount;
    }
    return DeleteQueueReply;
}());
exports.default = DeleteQueueReply;
