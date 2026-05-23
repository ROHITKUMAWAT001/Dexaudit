export interface AITool {
  id: string
  name: string
  category: string
  logo: string
  description: string
  plans: string[]
}

export const SUPPORTED_TOOLS: AITool[] = [
  {
    id: "cursor",
    name: "Cursor",
    category: "IDE",
    logo: "/tools/cursor.svg",
    description: "The AI Code Editor",
    plans: ["Hobby", "Pro", "Business"]
  },
  {
    id: "claude",
    name: "Claude",
    category: "Model",
    logo: "/tools/claude.svg",
    description: "Anthropic's LLM",
    plans: ["Free", "Pro", "Team"]
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "Model",
    logo: "/tools/chatgpt.svg",
    description: "OpenAI's LLM",
    plans: ["Free", "Plus", "Team", "Enterprise"]
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "Model",
    logo: "/tools/gemini.svg",
    description: "Google's LLM",
    plans: ["Free", "Advanced", "Business", "Enterprise"]
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "Assistant",
    logo: "/tools/copilot.svg",
    description: "AI pair programmer",
    plans: ["Individual", "Business", "Enterprise"]
  },
  {
    id: "v0",
    name: "v0.dev",
    category: "UI Generation",
    logo: "/tools/v0.svg",
    description: "Vercel's Generative UI",
    plans: ["Free", "Premium", "Team"]
  }
]
