'use strict';

const RxAmqpLib = require('../');

const config = {
  queue: 'test_queue',
  host: 'amqp://127.0.0.1'
};

// Process stream
RxAmqpLib.newConnection(config.host)
  .flatMap(connection => connection.createChannel())
  .flatMap(channel => channel.assertQueue(config.queue, { durable: false }))
  .flatMap(reply => reply.channel.consume(config.queue, { noAck: false }))
  .subscribe(message => console.log(message.content.toString()));
