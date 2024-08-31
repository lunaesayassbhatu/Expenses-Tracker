const form = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expense-list');
const totalExpense = document.getElementById('total-expense');

// Initialize total
let total = 0;

// Function to update total expense display
function updateTotal() {
    totalExpense.textContent = `Total Expense: $${total.toFixed(2)}`;
}

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid description and amount.');
        return;
    }

    // Create list item for the expense
    const listItem = document.createElement('li');
    listItem.innerHTML = `${description} - $${amount.toFixed(2)} <button class="remove-btn">Remove</button>`;

    // Add remove button functionality
    listItem.querySelector('.remove-btn').addEventListener('click', function() {
        total -= amount;
        updateTotal();
        expenseList.removeChild(listItem);
    });

    // Add the new item to the list
    expenseList.appendChild(listItem);

    // Update total expense
    total += amount;
    updateTotal();

    // Clear input fields
    descriptionInput.value = '';
    amountInput.value = '';
});