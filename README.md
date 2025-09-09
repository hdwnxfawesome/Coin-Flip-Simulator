# Coin Flip Simulator

A simple "Heads or Tails" coin flip simulator written in JavaScript.

## Usage

Run the script using [Node.js](https://nodejs.org/) or in your browser console:

```javascript
function coinFlip() {
    // Generate a random number: 0 or 1
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    return result;
}

// Example usage:
console.log("The result is:", coinFlip());
```

## Example Output

```
The result is: Heads
```
or
```
The result is: Tails
```

## License

MIT
