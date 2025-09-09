function coinFlip() {
    // Generate a random number: 0 or 1
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    return result;
}

// Example usage:
console.log("The result is:", coinFlip());
