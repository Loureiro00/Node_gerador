import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha uma ferramenta (1-QRCODE ou (2- PASSWORD (3- CEP (4- EXIT" ),
        pattern: /^[1-2-3-4]+$/,
        message: chalk.red.italic("Por favor escolha uma das opções (1,2,3 ou 4)"),
        required: true,
    },
];

export default mainPrompt