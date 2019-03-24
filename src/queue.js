const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.maxSize === this.size()) {
			throw new Error("Queue has max size");
		}

		this.heap.push(data, priority);
	}

	shift() {
		this.heap.pop();
		
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
