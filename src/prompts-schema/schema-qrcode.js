import chalk from "chalk";

const promptQRcode = [
    {
        name: "link",
        description: chalk.yellow.bold("Digite o link para gerar o QRCODE"),
    },
    {
        name : "type",
        description : chalk.yellow("Escolha o tipo de QRCODE (1- IMAGEM ou (2- TERMINAL"),
        pattern: /^[1-2]+$/,
        message : chalk.red.italic("Por favor escolha uma das opções (1 ou 2)"),
        required: true,
    }

    
];



export default promptQRcode;