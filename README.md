# Exercise: Coffee Shop Receipt

Exercise code for the lesson **Exercise: Coffee Shop Receipt** in JavaScript in Depth on [ask-codey.com](https://www.ask-codey.com).

The Daily Grind, a neighborhood coffee shop, wants its order app to print receipts. You'll finish nine small functions in `receipt.js` that work out a receipt's numbers and text: the subtotal, the sales tax, the tip, a receipt line, whether a loyalty card has earned a free drink, and the quantity a customer typed; then, for the shop's ordering and year-end report, how many boxes an order needs, an amount as US money, and the ounces in a cup size. Tests check every function.

## Before you start

You need Node.js installed (`node --version` in a terminal prints its version). Nothing else: there's nothing to install with npm.

## What's here

- `receipt.js`: the nine functions, each returning a placeholder (`0`, `''` or `false`) for now. The comment above each one says what it should return, with examples. For you to finish.
- `print-receipt.js`: prints a whole receipt for one order, using your functions, so you can see them at work. Ready to use.
- `receipt.test.js`: the tests that check your functions. You don't need to change it.
- `package.json`: tells Node that these files share functions with `import` and `export`. Ready to use.

## How a function works, for now

You'll write your own functions in the *Functions* chapter. For this exercise, each function is already written except for its answer, so treat it as a fill-in-the-blank:

- The names in parentheses, such as `price` and `quantity`, are the values the function is handed. Use them like variables.
- Whatever comes after `return` is the function's answer. Replace the placeholder on the line under `// TODO`.
- `export` in front of a function lets other files use it: that's how the tests and `print-receipt.js` reach your code. Module 3's lesson *Modules: import and export* explains how it works.

## Run it

Open the folder in VS Code, and a terminal there (**Terminal > New Terminal**). Then:

```bash
node print-receipt.js
```

## Check your work

```bash
node --test
```

At first every test fails: that is expected. Each function you finish turns its test green. A failing test's message says which values it used and what it expected, for example *The tax on $14.25 is 1.14. Without rounding it comes out as 1.1400000000000001.*

## The rules

- The sales tax rate is 8%. Give it a name with `const` at the top of `receipt.js`, and use the name in `salesTax`.
- Round money to the nearest cent in `salesTax` and `tip`, and show it with two decimal places in `receiptLine`.
- Build `receiptLine`'s text with a template literal.

## Tips

- Work out an example by hand first: what is 8% of $7.35, and what is that to the nearest cent?
- To round to cents, turn dollars into cents (times 100), round with `Math.round`, then turn them back (divided by 100).
- 15% of an amount is the amount times 15, divided by 100.
- `toFixed(2)` shows a number with two decimal places, and `$${...}` puts a dollar sign in front of a blank in a template literal.
- Text from a box is always a string, and `Number(...)` turns it into a number.
- A box that's only part full still counts, so round the number of boxes up: *Numbers in Depth* has the tool.
- `toLocaleString` with `"en-US"` and the currency options in the comment writes US money.
- `Number('12oz')` is `NaN`. *Types and Converting Between Them* shows the converter that reads a number off the front of text.

## Hand it in

When it works, put your solution in a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. You don't need Git: create the repo on GitHub, choose **Add file**, then **Upload files**, and upload everything in this folder. The lesson page shows each step, and the lesson *Put Your Code on GitHub* walks through every screen.
