class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left && this.right) {
			return false;
		}

		if (this.left === null) {
			this.left = node;
		} else {
			this.right = node;
		}

		node.parent = this;
		return true;
	}

	removeChild(node) {
		if (this.left !== node && this.right !== node) {
			throw new Error("This node isn't a child");
		}

		if (this.left === node) {
			this.left = null;
		} else {
			this.right = null;
		}

		node.parent = null;
		return true;
	}

	remove() {
		if (this.parent !== null) {
			this.parent.removeChild(this)
		}

		return true;
	}

	swapWithParent() {
		if (this.parent !== null) {
			return false;
		}
		
		return true;
	}
}

module.exports = Node;
