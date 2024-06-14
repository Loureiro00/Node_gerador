import chalk from "chalk";
import prompt from 'prompt';
import buscadorcep from 'buscadorcep';
import promptCep from "../../prompts-schema/schema-cep.js";
import menu from "../../index.js"
// Configuração do prompt
prompt.start();




async function searchAddressByCep() {
  console.log(chalk.magenta.bold("Digite o CEP para buscar o endereço"));
  prompt.get(promptCep, async (err, result) => {
    if (err) {
      console.log(chalk.red`Erro na entrada do CEP: ${err}`);
      return;
    }

    try {
      const endereco = await buscadorcep(result.cep);
      console.log(chalk.green("Endereço encontrado:"));
      console.log(endereco);
    } catch (error) {
      console.log(chalk.red`Erro ao buscar endereço: ${error}`);
    } finally {
      menu();
    }
    
  });
}

export default searchAddressByCep;