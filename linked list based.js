class Stack {
    constructor() {
        this.top = null; // Pointer to the top of the stack, initialized to null
        this.size = 0;   // Size of the stack, initialized to 0
    }

    // Push: Add element to the stack
    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top; // Point the new node's next to the current top
        this.top = newNode;      // Update the top to the new node
        this.size++;
    }

    // Pop: Remove and return the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow"; // Stack is empty, cannot pop
        }
        const poppedNode = this.top; // Store the current top node
        this.top = this.top.next;    // Update the top to the next node
        this.size--;
        return poppedNode.data;      // Return the data of the popped node
    }

    // Peek: View the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack"; // Stack is empty, nothing to peek
        }
        return this.top.data; // Return the data of the top node
    }

    // IsEmpty: Check if the stack is empty
    isEmpty() {
        return this.top === null;
    }

    // Size: Get the number of elements in the stack
    getSize() {
        return this.size;
    }

    // PrintStack: Display all elements in the stack
    printStack() {
        let current = this.top;
        let str = "";
        while (current) {
            str += current.data + " ";
            current = current.next;
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

console.log(stack.printStack()); // "30 20 10"
console.log(stack.getSize()); // 3
console.log(stack.peek()); // 30

console.log(stack.pop()); // 30
console.log(stack.printStack()); // "20 10"
console.log(stack.getSize()); // 2

console.log(stack.pop()); // 20
console.log(stack.pop()); // 10
console.log(stack.pop()); // "Underflow" (stack is empty)
