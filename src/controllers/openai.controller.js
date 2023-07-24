const { CHATGPT_API_KEY } = require('../common')

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: CHATGPT_API_KEY,
})

exports.chatAi = async (req, res) => {
    const { chat } = req.body
    const openai = new OpenAIApi(configuration)
    
    await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages : [{
            role: 'user', 
            content : chat
        }],
    })
    .then(result => {
        console.log(result.data.choices[0].message)
        res.json(result.data.choices[0].message)
    }
    ).catch(err => console.error('Error calling ChatGPT API:', err))
}
