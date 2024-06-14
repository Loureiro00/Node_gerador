import qr from "qrcode-terminal";
import chalk from "chalk";
import menu from "../../index.js"
async function handle(err, result) {
    

    if(err){
        console.log("Error on application");
        return;
    }
    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode)=>{
        console.log(chalk.green("QR Code gerado com sucesso: \n"));
        console.log(qrcode)
       

    });
    const menuResult = await menu();
    
}

export default handle