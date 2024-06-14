import prompt from "prompt";
import promptQRcode from "../../prompts-schema/schema-qrcode.js";
import handle from "./handle.js";


async function createQrCode() {
    prompt._get(promptQRcode, handle);

    prompt.start();

    


}

export default createQrCode;