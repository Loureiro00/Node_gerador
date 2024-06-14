import chalk from "chalk";

const promptCep = [
    {
      name: "cep",
      description: chalk.yellow.bold("Digite o CEP para buscar o endereço"),
      pattern: /^[0-9]{8}$/, // Padrão para aceitar apenas 8 dígitos numéricos
      message: chalk.red("CEP inválido. Por favor, digite um CEP válido."),
      required: true,
    }
  ];


  export default promptCep