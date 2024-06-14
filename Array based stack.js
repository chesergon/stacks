class Stack {
    constructor() {
        this.items = []; // Array to store stack elements
    }

    // Push: Add element to the stack
    push(element) {
        this.items.push(element);
    }

    // Pop: Remove and return the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow"; // Stack is empty, cannot pop
        }
        return this.items.pop();
    }

    // Peek: View the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack"; // Stack is empty, nothing to peek
        }
        return this.items[this.items.length - 1];
    }

    // IsEmpty: Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Size: Get the number of elements in the stack
    size() {
        return this.items.length;
    }

    // PrintStack: Display all elements in the stack
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str.trim();
    }
}

// Example usage:
let stack = new Stack();

console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack()); // "10 20 30"
console.log(stack.size()); // 3
console.log(stack.peek()); // 30

console.log(stack.pop()); // 30
console.log(stack.printStack()); // "10 20"
console.log(stack.size()); // 2

console.log(stack.pop()); // 20
console.log(stack.pop()); // 10
console.log(stack.pop()); // "Underflow" (stack is empty)
