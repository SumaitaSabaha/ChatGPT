const {OpenAI} = require("openai");
const express = require("express");

const openai = new OpenAI({
  apiKey: "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",
});

const app = express()
const port = 3080;

app.post('/', async(req, res) => {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.data.choices[0]);
  res.json({
    data: completion.data
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
