const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor () {
     this.queque = [];
  }

  getUnderlyingList() {
    function convertListNode(arr) {
      return arr.reverse().reduce((a, b) => {
        if (a) {
          const node = new ListNode(b);
          node.next = a;
          return node;
        }
        else {
          return new ListNode(b);
        }
      }, null);
    } return convertListNode(this.queque);
  }

  enqueue(value) {
    return this.queque.push(value);
  }

  dequeue() {
    return this.queque.shift();
  }
}

module.exports = {
  Queue
};
