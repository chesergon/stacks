class ArrayStack {
    constructor() {
        this.items = []; // Array to store stack elements
    }

    push(element) {
        this.items.push(element); // Add element to the stack
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow"; // Stack is empty, cannot pop
        }
        return this.items.pop(); // Remove and return the top element
    }

    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack"; // Stack is empty, nothing to peek
        }
        return this.items[this.items.length - 1]; // View the top element
    }

    isEmpty() {
        return this.items.length === 0; // Check if stack is empty
    }

    size() {
        return this.items.length; // Get the number of elements in the stack
    }

    printStack() {
        return this.items.join(" "); // Display all elements in the stack
    }
}

// Example usage:
let arrayStack = new ArrayStack();
arrayStack.push(10);
arrayStack.push(20);
arrayStack.push(30);
console.log(arrayStack.printStack()); // "10 20 30"
console.log(arrayStack.pop()); // 30
console.log(arrayStack.printStack()); // "10 20"



class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Pointer to the next node, initialized to null
    }
}

class LinkedListStack {
    constructor() {
        this.top = null; // Pointer to the top of the stack
        this.size = 0;   // Size of the stack
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top; // Point the new node's next to the current top
        this.top = newNode;      // Update the top to the new node
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow"; // Stack is empty, cannot pop
        }
        const poppedNode = this.top; // Store the current top node
        this.top = this.top.next;    // Update the top to the next node
        this.size--;
        return poppedNode.data;      // Return the data of the popped node
    }

    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack"; // Stack is empty, nothing to peek
        }
        return this.top.data; // View the top element
    }

    isEmpty() {
        return this.top === null; // Check if stack is empty
    }

    size() {
        return this.size; // Get the number of elements in the stack
    }

    printStack() {
        let current = this.top;
        let str = "";
        while (current) {
            str += current.data + " ";
            current = current.next;
        }
        return str.trim(); // Display all elements in the stack
    }
}

// Example usage:
let linkedListStack = new LinkedListStack();
linkedListStack.push(10);
linkedListStack.push(20);
linkedListStack.push(30);
console.log(linkedListStack.printStack()); // "30 20 10"
console.log(linkedListStack.pop()); // 30
console.log(linkedListStack.printStack()); // "20 10"

