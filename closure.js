function outerFunction() {
  let num = 5;

  (function innerFunction() {
    // this is an example of iife (immediately invoked function execution)
    console.log(
      "The inner function displays iife (immediately invoked function execution)."
    );
    console.log(`The value of num is ${num}.`);
  })();
}

outerFunction();
