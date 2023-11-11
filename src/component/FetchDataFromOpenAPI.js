// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     apiKey: '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'
// });
// const openai = new OpenAIApi(configuration);

// export async function fetchData(msg){
//     console.log(msg)
//     return await openai.listEngines();
// }
export function fetchData(msg){
    console.log(msg)
    return msg;
}