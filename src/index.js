import prompt from "prompt";
import mainPrompt from "./prompts-schema/schema-main.js"
import createQrCode from "./services/qr-code/create.js";
import buscadorcep from "buscadorcep";
import searchAddressByCep from "./services/busca-cep/create.js";
import createPassword from "./services/password/create.js";
import exit from "./services/exit/exit.js"



async function menu() {
  prompt.get(mainPrompt, async (err, choose) => {


    switch (choose.select) {
      case "1":
        await createQrCode();
        break;
      case "2":
        await createPassword();
        break;
      case "3":
          await searchAddressByCep();
          break; 
      case "4":
          exit(); 

      case err:
        console.log(`Erro na aplicação ${err}`);
        break;
      default:
        console.log("opção inválida selecione 1,2 ou 3");

        break;
    }
  });

  prompt.start();
}
export default menu;

menu();