function calculate(question) {
  question = question.toLowerCase();

  const words = question.split(" ");
  const num1 = parseInt(words[2]);
  const operator = words[3];
  const num2 = parseInt(words[4]);

  let result;

  switch (operator) {
    case "plus":
      result = num1 + num2;
      break;
    case "minus":
      result = num1 - num2;
      break;
    case "multiplied":
      result = num1 * num2;
      break;
    case "divided":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        return "Cannot divide by zero!";
      }
      break;
    default:
      return "Unknown operation!";
  }

  return `${num1} ${operator} ${num2} is ${result}`;
}

const inputQuestion = process.argv.slice(2).join(" ");

if (inputQuestion) {
  const result = calculate(inputQuestion);
  console.log(result);
} else {
  console.log("Please provide a question.");
}
