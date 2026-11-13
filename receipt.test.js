// Tests for receipt.js. Run them with: node --test
// You don't need to change this file.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { subtotal, salesTax, tip, receiptLine, earnedFreeDrink, quantityFromText } from './receipt.js';

test('subtotal: the price times the quantity', () => {
  assert.equal(subtotal(4.75, 2), 9.5, 'Two lattes at $4.75 come to 9.5.');
  assert.equal(subtotal(3.25, 3), 9.75, 'Three muffins at $3.25 come to 9.75.');
  assert.equal(subtotal(4.25, 1), 4.25, 'One cold brew at $4.25 comes to 4.25.');
});

test('salesTax: 8% of the amount, rounded to the nearest cent', () => {
  assert.equal(salesTax(9.5), 0.76, 'The tax on $9.50 is 0.76.');
  assert.equal(salesTax(14.25), 1.14, 'The tax on $14.25 is 1.14. Without rounding it comes out as 1.1400000000000001.');
  assert.equal(salesTax(7.35), 0.59, 'The tax on $7.35 is 0.588, which rounds to 0.59.');
});

test('tip: a percent of the amount, rounded to the nearest cent', () => {
  assert.equal(tip(9.5, 20), 1.9, 'A 20% tip on $9.50 is 1.9.');
  assert.equal(tip(14.25, 15), 2.14, 'A 15% tip on $14.25 is 2.1375, which rounds to 2.14.');
  assert.equal(tip(8, 18), 1.44, 'An 18% tip on $8.00 is 1.44.');
});

test('receiptLine: quantity, item and line total, as one line of text', () => {
  assert.equal(receiptLine('Latte', 2, 4.75), '2 x Latte: $9.50');
  assert.equal(receiptLine('Blueberry muffin', 1, 3.25), '1 x Blueberry muffin: $3.25');
  assert.equal(receiptLine('Cold brew', 3, 4.25), '3 x Cold brew: $12.75');
});

test('earnedFreeDrink: true from 10 stamps up', () => {
  assert.equal(earnedFreeDrink(7), false, 'A card with 7 stamps has not earned a free drink yet.');
  assert.equal(earnedFreeDrink(10), true, 'A card with 10 stamps has earned a free drink.');
  assert.equal(earnedFreeDrink(14), true, 'A card with 14 stamps has earned a free drink.');
});

test('quantityFromText: what the customer typed, as a number', () => {
  assert.equal(quantityFromText('2'), 2, "The text '2' becomes the number 2.");
  assert.equal(quantityFromText(' 3 '), 3, "The text ' 3 ' becomes the number 3.");
  assert.ok(Number.isNaN(quantityFromText('two')), "The text 'two' isn't a number, so the answer is NaN.");
});
