function calculateTotal(price, tax) {
    let total = price + tax;
    return total;
}

function calculateDiscount(price) {
    let discount = price * 0.10;
    return discount;
}

console.log(calculateTotal(100, 18));
console.log(calculateDiscount(100));