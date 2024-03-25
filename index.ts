import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "first number" },
  { message: "enter second number", type: "number", name: "second number"},
  { message: "select one of the operators to perform action", type: "list", name: "operators",choices:["Addition","Subtraction","Multiplication","Division"],
},
]);

console.log(answer);

//conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
  
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.opertor === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Devesion") {
  console.log(answer.firstNumber / answer.secondNumber);
}else {
  console.log("Please select valid operator")
}