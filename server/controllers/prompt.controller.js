import generateResult from "../services/ai.service.js";

export const userPrompt = async (req, res) => {
  const prompt = req.query.prompt;
  console.log(prompt);
  if (!prompt) {
    return res.status(400).send("Prompt is Required");
  }
  const response = await generateResult(prompt);
  return res.send(response);
};
