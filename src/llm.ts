import {prompt} from './query';
import {getApiKey} from './api';
const { GoogleGenerativeAI } = require("@google/generative-ai");
const APIKEY = getApiKey();
const genAI = new GoogleGenerativeAI(APIKEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export async function transformCode(code:string){
    const query = prompt + code;
    const result = await model.generateContent(query);
    const response = await result.response;
    const transformedCode = response.text();
    return(transformedCode);

}
