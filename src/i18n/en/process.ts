import type { ProcessCopy } from "../es/process"

export const process: ProcessCopy = {
  eyebrow: "My process",
  title: "How I work",
  steps: [
    {
      title: "1. Listen and learn",
      body: "We go through your goals, your current site or system and any constraints.",
    },
    {
      title: "2. Plan and propose",
      body: "I define the architecture, tech stack, integrations and give you an estimate.",
    },
    {
      title: "3. Build and verify",
      body: "I deliver in iterations and show progress along the way, with tests and static analysis in the pipeline.",
    },
    {
      title: "4. Launch and support",
      body: "I deploy, check performance, security and keep everything updated after launch.",
    },
  ],
  principles: [
    {
      title: "I own the technical side end to end",
      body: "I take care of architecture, implementation, performance, security, CI/CD flows, delivery and maintenance.",
    },
    {
      title: "I build for real use",
      body: "I listen closely to your requirements and turn them into products that hold up in real use. I work well with designers, developers and product stakeholders.",
    },
    {
      title: "Tests and static analysis in the pipeline",
      body: "I back the code with automated tests, static analysis and automatic formatting and refactoring, to catch bugs before they reach production.",
    },
    {
      title: "AI is part of my daily workflow",
      body: "I use AI coding agents, together with automated tests and static analysis, to ship reliable features faster.",
    },
  ],
}
