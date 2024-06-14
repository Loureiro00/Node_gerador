import chalk from "chalk";
import handle from "./handle.js";
import menu from "../../index.js";

async function createPassword() {
    const password = await handle();

    console.log(chalk.green(`Password gerado com sucesso: ${password}`));

    const result = await menu();
}

export default createPassword;
