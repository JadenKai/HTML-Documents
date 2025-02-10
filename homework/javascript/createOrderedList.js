function createOrderedList() {
  let values = [];
  let input;

  while ((input = prompt("Enter a value (leave empty to finish):")) !== "") {
    if (input.length < 50) {
      values.push(input);
    }
  }

  let numbers = values.filter(v => !isNaN(v)).map(Number).sort((a, b) => a - b);
  let nonNumbers = values.filter(v => isNaN(v)).sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));

  return [...numbers, ...nonNumbers];
}
