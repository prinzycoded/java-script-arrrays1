function printobjects() {
    let arrayOfObjects = [
  { name: "pen", length: 5 },
  { name: "book", length: 2 },
  { name: "laptop", length: 10 },
  { name: "phone", length: 16 },
  { name: "pencil", length: 7 }
];
for (let i = 0; i < arrayOfObjects.length; i++) {
    if (arrayOfObjects[i].length === arrayOfObjects[0].length) {
        console.log(arrayOfObjects[i].name + " is correct");
    }
    else {
        console.log(arrayOfObjects[i].name + " is wrong");
    }
}
}
printobjects();