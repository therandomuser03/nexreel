const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate 30 seconds video on topic :Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContextText as field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"imagePrompt\": \"A dramatic, realistic painting of Spartacus, a muscular Thracian gladiator with a determined expression, leading a slave revolt in ancient Rome, surrounded by fellow gladiators with makeshift weapons. Detailed Roman architecture in the background, smoke and fire filling the air, conveying chaos and rebellion. Cinematic lighting, hyperrealistic detail.\",\n    \"ContextText\": \"Narrator: In 73 BC, a slave named Spartacus dared to defy the might of Rome. A gladiator, trained for death, he ignited a spark of rebellion that would shake the empire to its core.\"\n  },\n  {\n    \"imagePrompt\": \"A hyperrealistic depiction of Roman legionaries, heavily armored and disciplined, advancing in formation against a ragtag army of gladiators and slaves. The Roman soldiers are stern and unwavering, a symbol of Roman power. Sun reflecting off their armor. Battlefield is dusty and chaotic.\",\n    \"ContextText\": \"Narrator: The Roman legions, the most formidable fighting force of the time, were sent to crush the uprising. But Spartacus's army, though poorly equipped, was driven by a thirst for freedom.\"\n  },\n  {\n    \"imagePrompt\": \"Close-up, photorealistic shot of Spartacus in battle. Sweat and blood on his face, a determined glint in his eye. He's wielding a gladius with skill and ferocity, fighting for his life and the freedom of his people.  Shallow depth of field, focusing on his face.\",\n    \"ContextText\": \"Narrator: Spartacus proved to be a brilliant strategist. He led his followers to victory after victory, ambushing and outmaneuvering the Roman armies.\"\n  },\n  {\n    \"imagePrompt\": \"A realistic landscape depicting the Appian Way, filled with crucified slaves lining the road as far as the eye can see. A dark and somber scene, reflecting the brutal consequences of the rebellion.  Overcast sky, desolate environment.  Long shot perspective.\",\n    \"ContextText\": \"Narrator: But the rebellion could not last forever. The Roman war machine was too powerful. Eventually, Spartacus fell in battle, and the revolt was brutally suppressed.\"\n  },\n  {\n    \"imagePrompt\": \"A close-up, highly detailed portrait of Spartacus's dead face, resting on a battlefield littered with weapons and bodies. A mixture of peace and defiance etched on his features.  Dramatic lighting emphasizing his noble features, even in death. Photorealistic.\",\n    \"ContextText\": \"Narrator: Though his rebellion was ultimately crushed, Spartacus became a symbol of resistance against tyranny, inspiring generations to fight for freedom and justice.\"\n  }\n]\n```\n"},
          ],
        },
      ],
    });