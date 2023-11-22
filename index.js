const {OpenAI} = require("openai");
const express = require("express");
const cors = require('cors');

const openai = new OpenAI({
  apiKey: "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",
});

const bodyParser = require('body-parser')

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(bodyParser.json())
const port = 3080;

app.post('/', async(req, res) => {
  const {message} = req.body;
  console.log(message);
  const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt:`${message}`,
    max_tokens: 100,
    temperature: 0.5,

  });
  console.log();
  res.json({
    // data: response.data
    message: response.choices[0].text,
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
