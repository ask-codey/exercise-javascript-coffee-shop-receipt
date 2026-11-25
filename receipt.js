// The Daily Grind's receipt: nine small functions for you to finish.
//
// How to read a function (the Functions chapter teaches you to write your own):
// - The names in parentheses, such as price and quantity, are the values the function is handed.
//   Use them like variables.
// - Whatever comes after `return` is the function's answer. Each one returns a placeholder for now
//   (0, '' or false). Replace the placeholder with your own code, on the TODO line.
// - `export` in front lets other files, such as the tests and print-receipt.js, use the function.
//   Module 3's lesson "Modules: import and export" explains how.
//
// The shop's sales tax rate is 8%. Give it a name with const on the line below, and use that name in salesTax.


/*
 * The price of one item times how many were ordered.
 *
 * subtotal(4.75, 2) -> 9.5
 * subtotal(3.25, 3) -> 9.75
 */
export function subtotal(price, quantity) {
  // TODO: replace 0 with your calculation.
  return 0;
}

/*
 * The sales tax on an amount: 8% of it, rounded to the nearest cent.
 *
 * salesTax(9.5) -> 0.76
 * salesTax(14.25) -> 1.14    (not 1.1400000000000001)
 * salesTax(7.35) -> 0.59     (8% is 0.588, which rounds to 0.59)
 */
export function salesTax(amount) {
  // TODO: replace 0 with your calculation.
  return 0;
}

/*
 * A tip of the given percent of an amount, rounded to the nearest cent.
 *
 * tip(9.5, 20) -> 1.9
 * tip(14.25, 15) -> 2.14     (15% is 2.1375, which rounds to 2.14)
 */
export function tip(amount, percent) {
  // TODO: replace 0 with your calculation.
  return 0;
}

/*
 * One line of the receipt: the quantity, an x, the item, a colon, and the line's total
 * (price times quantity) with a dollar sign and exactly two decimal places.
 *
 * receiptLine('Latte', 2, 4.75) -> '2 x Latte: $9.50'
 * receiptLine('Blueberry muffin', 1, 3.25) -> '1 x Blueberry muffin: $3.25'
 */
export function receiptLine(item, quantity, price) {
  // TODO: replace '' with a template literal.
  return '';
}

/*
 * Whether a loyalty card has earned a free drink: true when it has 10 or more stamps.
 *
 * earnedFreeDrink(7) -> false
 * earnedFreeDrink(10) -> true
 */
export function earnedFreeDrink(stamps) {
  // TODO: replace false with a comparison.
  return false;
}

/*
 * What a customer typed into the quantity box, which is always text, as a number.
 * Text that isn't a number gives NaN.
 *
 * quantityFromText('2') -> 2
 * quantityFromText(' 3 ') -> 3
 * quantityFromText('two') -> NaN
 */
export function quantityFromText(typed) {
  // TODO: replace 0 with a conversion.
  return 0;
}

/*
 * How many boxes hold all the items, when a box holds perBox of them. A part-full box still counts.
 * (Numbers in Depth: the Math toolbox.)
 *
 * boxesNeeded(25, 6) -> 5     (4 full boxes, and one more for the last muffin)
 * boxesNeeded(24, 6) -> 4
 */
export function boxesNeeded(items, perBox) {
  // TODO: replace 0 with your calculation.
  return 0;
}

/*
 * An amount as US money, the way people in the US read it: a dollar sign, commas between
 * thousands and two decimal places. Ask toLocaleString for "en-US", with these options:
 * { style: "currency", currency: "USD" }  (Numbers in Depth: showing numbers to people.)
 *
 * moneyText(58638.75) -> '$58,638.75'
 * moneyText(4.5) -> '$4.50'
 */
export function moneyText(amount) {
  // TODO: replace '' with the amount as US money.
  return '';
}

/*
 * The number of ounces in a cup size the supplier writes as text, such as '12oz'.
 * (Types and Converting Between Them: parseInt and parseFloat.)
 *
 * ouncesFromLabel('12oz') -> 12
 * ouncesFromLabel('16 oz') -> 16
 */
export function ouncesFromLabel(label) {
  // TODO: replace 0 with a conversion.
  return 0;
}
