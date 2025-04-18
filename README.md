# String Calculator

A simple implementation of a string calculator in JavaScript, designed to handle various input formats and provide robust error handling.

## Features

- Returns the sum of numbers in a string.
- Supports:
  - Comma-separated numbers.
  - Newline-separated numbers.
  - Custom delimiters.
- Throws exceptions for:
  - Negative numbers (with a list of all negative numbers found).
- Handles edge cases like empty strings and single numbers.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/string-calculator.git
   ```
2. Navigate to project directory:
    ```bash
   cd string-calculator
   ```
3. Install dependencies:
    ```bash
   npm install
   ```

## Usage


```markdown
1. Run the calculator script:
    ```bash
    node stringCalculator.js
    ```

2. Pass a string of numbers as input:
    ```javascript
    const calculator = require('./calculator');
    console.log(calculator.add("1,2,3")); // Outputs: 6
    ```

3. Use custom delimiters:
    ```javascript
    console.log(calculator.add("//;\n1;2;3")); // Outputs: 6
    ```

4. Handle edge cases:
    ```javascript
    console.log(calculator.add("")); // Outputs: 0
    console.log(calculator.add("5")); // Outputs: 5
    ```

5. Handle errors:
    ```javascript
    try {
         console.log(calculator.add("1,-2,3,-4"));
    } catch (error) {
         console.error(error.message); // Outputs: "Negatives not allowed: -2, -4"
    }
    ```

## Testing

Run the test suite to ensure all features work as expected:
    ```bash
    npm test
    ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
```