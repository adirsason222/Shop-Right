// Get references to the HTML elements
const newItemInput = document.getElementById("newItem");
const quantityInput = document.getElementById("Quantity");
const addItemButton = document.getElementById("addItemButton");
const itemList = document.getElementById("itemList");

// Add a click event listener to the button
addItemButton.addEventListener("click", function () {
    // Get the values of the item and quantity inputs
    const newItemText = newItemInput.value.trim();
    const itemQuantity = quantityInput.value;

    // Check if the item input is not empty
    if (newItemText !== "") {
        // Create a new list item
        const listItem = document.createElement("li");
        
        // Set the text content of the list item to include item and quantity
        listItem.textContent = `${newItemText} (Quantity: ${itemQuantity})`;

        // Append the list item to the list
        itemList.appendChild(listItem);

        // Clear the input fields
        newItemInput.value = "";
        quantityInput.value = "";
    }
});