import inquirer from "inquirer";
import chalk from "chalk";
//import chalkAnimation from "chalk-animation";
var loop = true;
const todos = [];
while (loop) {
    const answer = await inquirer.prompt([
        {
            name: "TODO",
            type: "string",
            message: "What you want to add in TODO List?"
        },
        {
            name: "AddMore",
            type: "confirm",
            message: "Do You want to add more in the list?"
        }
    ]);
    const { TODO, AddMore } = answer;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log(chalk.red("Please! enter valid input."));
    }
    loop = AddMore;
}
if (todos.length > 0) {
    console.log(chalk.blue("==== Your TODO List is : ===="));
    todos.forEach(elements => {
        console.log(chalk.green(elements));
    });
}
else {
    console.log(chalk.green("Hurrah! No TODO List...."));
}
