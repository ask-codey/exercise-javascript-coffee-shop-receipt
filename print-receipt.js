// Prints a receipt for one order, using your functions from receipt.js.
// Run it with: node print-receipt.js
// This file is ready to use: you don't need to change it.
import { subtotal, salesTax, tip, receiptLine, earnedFreeDrink, quantityFromText } from './receipt.js';

const lattePrice = 4.75;
const muffinPrice = 3.25;
const tipPercent = 20;

// What the customer typed into the order form: text, even though it's digits.
const typedLattes = '2';
const typedMuffins = '1';

const lattes = quantityFromText(typedLattes);
const muffins = quantityFromText(typedMuffins);

const itemsTotal = subtotal(lattePrice, lattes) + subtotal(muffinPrice, muffins);
const tax = salesTax(itemsTotal);
const tipAmount = tip(itemsTotal, tipPercent);
const total = itemsTotal + tax + tipAmount;

// The customer had 9 stamps, and gets one more for each drink.
const stamps = 9 + lattes;

console.log('The Daily Grind');
console.log(receiptLine('Latte', lattes, lattePrice));
console.log(receiptLine('Blueberry muffin', muffins, muffinPrice));
console.log(`Subtotal: $${itemsTotal.toFixed(2)}`);
console.log(`Sales tax: $${tax.toFixed(2)}`);
console.log(`Tip (${tipPercent}%): $${tipAmount.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);
console.log(`Stamps on your card: ${stamps}. Free drink earned: ${earnedFreeDrink(stamps)}`);
