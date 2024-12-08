# Next.js Unhandled ReferenceError Bug

This repository demonstrates a common error in Next.js applications: an unhandled `ReferenceError` caused by referencing a variable that has not been declared or initialized.

## Bug Description

The `about.js` file attempts to access a variable (`unexistentVariable`) that does not exist, resulting in a runtime `ReferenceError`.  Next.js's default error handling may not provide very descriptive information making it hard to debug.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`.
5. Observe the error in your browser's console.

## Solution

The solution involves carefully checking for undefined variables and properly declaring and initializing variables before use. The `aboutSolution.js` shows the corrected version.