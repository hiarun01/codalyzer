import generateResult from "../services/ai.service.js";

export const codeReview = async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) {
      return res.status(400).send("Prompt is Required");
    }
    const response = await generateResult(code);
    return res.send(response);
  } catch (error) {
    console.log("error while calling APi", error.message);
  }
};
