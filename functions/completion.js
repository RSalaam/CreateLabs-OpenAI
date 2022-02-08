import GATEKEEPER from "../config/environment"

const submitForCompletion = async (input) => {
    try {
        const user_input = input;
        const raw = JSON.stringify({ prompt: user_input, max_tokens: 20, temperature: 0 });
    
        const response = await fetch(
          "https://api.openai.com/v1/engines/text-davinci-001/completions",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${GATEKEEPER}`,
            },
            method: "POST",
            body: raw
          }
        );
        const finalResponse = await response.json();
        //console.log(finalResponse)
        return finalResponse.choices[0].text
      } catch (error) {
        console.log(error);
      }
}

export default submitForCompletion;