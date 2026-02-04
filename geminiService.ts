
import { GoogleGenAI, Type } from "@google/genai";
import { MOCK_COURSES } from "../constants";

// The ReadyScale AI Mentor helper for general course and project guidance
export async function askAgent(prompt: string, context: any) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      // Using gemini-3-pro-preview for technical STEM/coding reasoning tasks
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are the ReadyScale AI Mentor. 
        KNOWLEDGE BASE: You have deep knowledge of the following courses: ${JSON.stringify(MOCK_COURSES)}.
        USER CONTEXT: ${JSON.stringify(context)}.
        OBJECTIVE: Help users understand course concepts (Frontend, Backend, DevOps), guide them on project requirements, and troubleshoot learning paths.
        TONE: Concise, professional, and encouraging. Use markdown for lists or code snippets.`,
        temperature: 0.7,
      },
    });
    // response.text is a property, not a method.
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble accessing my course database. Please try again later.";
  }
}

// Generates structured learning path focus areas using JSON mode and responseSchema
export async function getLearningSuggestions(associateProfile: any) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      // Pro model used for complex reasoning based on educational history
      model: "gemini-3-pro-preview",
      contents: `Based on my readiness score of ${associateProfile.readinessScore} and completed courses ${associateProfile.completedCourses.join(', ')}, suggest 3 specific focus areas.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              suggestion: { type: Type.STRING },
              reason: { type: Type.STRING },
              priority: { type: Type.STRING }
            }
          }
        }
      }
    });
    // response.text is a property; trim and parse the JSON string result.
    return JSON.parse(response.text?.trim() || "[]");
  } catch (error) {
    console.error("Learning Suggestions Error:", error);
    return [];
  }
}
