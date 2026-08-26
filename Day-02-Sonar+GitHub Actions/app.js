function calculateTotal(price, quantity) {
    return price * quantity;
}

function calculateDiscount(total) {
    if (total > 1000) {
        return total * 0.10;
    }

    return 0;
}

function calculateFinalPrice(price, quantity) {
    const total = calculateTotal(price, quantity);
    const discount = calculateDiscount(total);

    return total - discount;
}

const price = 500;
const quantity = 3;

console.log("Total:", calculateTotal(price, quantity));
console.log("Discount:", calculateDiscount(price * quantity));
console.log("Final Price:", calculateFinalPrice(price, quantity));