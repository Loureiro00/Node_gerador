import chalk from "chalk";

function exit() {
    console.log(chalk.bgBlueBright.bold("Saindo da aplicação..."));
    console.log(chalk.bgGreenBright.bold("Até mais!"));
    process.exit();
  }

  export default exit