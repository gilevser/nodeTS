import { totalPrice } from "./totalPrice.js";

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price)