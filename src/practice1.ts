type CartItem = {
name: string;
price: number;
quantity?: number;
};

function calculateTotal(cartItem:CartItem) {
    const {name, price, quantity = 1} = cartItem;
    return `total price ${price * quantity}`;
}

const items:CartItem = {
    name: "apple",
    price: 32,
    quantity: 3
}

console.log(calculateTotal(items));