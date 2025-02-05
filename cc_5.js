// Task 1 - Customer Profile
let customer = {
    name: "John Doe",
    age: 35,
    email: "johndoe@email.com"
};// declares object with the properties

// Logs each object as a template literal
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);

// Task 2 - Order Details
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

// Task 3 - Shopping Cart
let cartItems = ["Breaking Benjamin", "Blue Oyster Cult", "Metallica"];// Declares initial array
cartItems.push("Benjamin Franklin");// Adds new element in the arrya
cartItems.pop();// Removes last element in the array
cartItems.unshift("Queen");// Adds new element at the beginning
cartItems.shift();// Removes the first element
console.log(cartItems);// Output is the same as the declared array

// Task 4 - Map Method
let prices = [100, 200, 300];
let discountPrices = prices.map(price => price* 0.5);// Applies 50% discount using .map()
console.log(discountPrices);

// Task 5 - Filter Method
let inventories = [0, 13, 453, 96, 854, 0, 4, 8, 0];// declares array of inventory
let zeroInvent = inventories.filter(inventory => inventory > 0);//Filters out products with zero stock
console.log(zeroInvent);

// Task 6 - Reduce Method
let sales = [500, 300, 200, 400];
let total = sales.reduce((sum, sale) => sum + sale, 0);// Reduces sales array into one value
console.log(total);// Output: 1400







