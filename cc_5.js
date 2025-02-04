// Task 1 - Object Properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "johndoe@email.com"
};// declares object with the properties

// Logs each object as a template literal
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);

// Task 2 - Object Method
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    // Declares the objects
    displayOrder: function() {
        console.log(`Order ID: #${this.orderId}`);
        console.log(`Total: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};

order.displayOrder();


