#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let time = await inquirer.prompt([
    {message: "Enter minute", name: "minute", type: "number"},
    {message: "Enter second", name: "second", type: "number"}
])

let sec = setInterval(function() {
    console.log(chalk.greenBright(time.minute + " : " + time.second));
    time.second--;
    if(time.second < 0) {
        time.second = 59;
        time.minute--;
    }
    if(time.minute < 0) {
        clearInterval(sec);
        console.log(chalk.greenBright("Time up"));
    }
}, 1000);
