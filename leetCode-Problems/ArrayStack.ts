/**
 * initialize your data structure here.
 */
export var MinStack = function() {
    this.pile = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.pile = [x, ...this.pile];
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.pile = this.pile.slice(1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.pile[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.pile);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */