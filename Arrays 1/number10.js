function printproperty(obj) {
    // Create an array of 5 objects with a value property
let numbers = [
  { value: 3 },
  { value: 8 },
  { value: 15 },
  { value: 22 },
  { value: 7 }
];

let evenSum = 0;

// Loop through the array
for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i].value;

  // Check if even or odd
  if (num % 2 === 0) {
    console.log(num + " is Even");
    evenSum += num; // add to even sum
  } else {
    console.log(num + " is Odd");
  }
}

// Print total sum of even numbers
console.log("Sum of even numbers:", evenSum);
}
printproperty();