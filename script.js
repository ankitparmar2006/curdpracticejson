// Initialize cart count and cart items array
let temp = 0;
let cartItems = []; // Array to store cart items

// Add to Cart function
addcart = () => {
    let cart1 = document.querySelector(".cart1");

    if (temp > 9) {
        alert("Space is full");
        return;
    }

    // Increment cart count and update the icon
    temp = temp + 1;
    cart1.innerHTML = temp;

    // Add item to cartItems array
    cartItems.push("Item " + temp);
}

// Remove from Cart function
removecart = () => {
    let cart1 = document.querySelector(".cart1");

    if (temp < 1) {
        alert("Item does not exist");
        return;
    }

    // Decrement cart count and update the icon
    temp = temp - 1;
    cart1.innerHTML = temp;

    // Remove the last item from cartItems array
    cartItems.pop();
}

// Show Cart items when cart icon is clicked
showCart = () => {
    let cartItemsDiv = document.getElementById("cartItems");
    let cartList = document.getElementById("cartList");

    // Clear existing cart list
    cartList.innerHTML = "";

    // Add all items from cartItems array to the list
    cartItems.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });

    // Show the cart items section
    cartItemsDiv.style.display = "block";
}

// Close the cart items section
closeCart = () => {
    let cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.style.display = "none"; // Hide the cart items section
}
