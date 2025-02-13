'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class QueueNode {
  constructor () {
    /**
     * @type {QueueNode|null}
     */
    this.next = null;
  }
}

class Queue {
  constructor () {
    /**
     * @type {QueueNode | null}
     */
    this.start = null;
    /**
     * @type {QueueNode | null}
     */
    this.end = null;
  }
}

/**
 * @note The queue implementation is experimental and unfinished.
 * Don't use this in production yet.
 *
 * @return {Queue}
 */
const create = () => new Queue();

/**
 * @param {Queue} queue
 */
const isEmpty = queue => queue.start === null;

/**
 * @param {Queue} queue
 * @param {QueueNode} n
 */
const enqueue = (queue, n) => {
  if (queue.end !== null) {
    queue.end.next = n;
    queue.end = n;
  } else {
    queue.end = n;
    queue.start = n;
  }
};

/**
 * @param {Queue} queue
 * @return {QueueNode | null}
 */
const dequeue = queue => {
  const n = queue.start;
  if (n !== null) {
    // @ts-ignore
    queue.start = n.next;
    if (queue.start === null) {
      queue.end = null;
    }
    return n
  }
  return null
};

exports.Queue = Queue;
exports.QueueNode = QueueNode;
exports.create = create;
exports.dequeue = dequeue;
exports.enqueue = enqueue;
exports.isEmpty = isEmpty;
//# sourceMappingURL=queue.cjs.map
