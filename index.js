#! /usr/bin/env node
//Import the 'inquirer' module, which is a command line interface for node.js
import inquirer from "inquirer";
import chalk from "chalk";
// Declare a constant 'answers' and assign it to the result of inquirer.prompt function 
const answers = await inquirer.prompt([
    {
        name: "Sentences",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentences.trim().split(" ");
// print the array of words to the console
console.log(chalk.green(words));
// print the word count of the sentence to the console
console.log(chalk.yellow(`your sentence word count is ${words.length}`));
