import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Watch | Analytics for AI Agents & Workflows",
  description: "Real-time analytics, monitoring, and cost insights for your AI agents, LLM workflows, and automations.",
  openGraph: {
    title: "Agent Watch | Analytics for AI Agents & Workflows",
    description: "Powerful analytics, monitoring, and insights for your AI agents, workflow bots, and automations.",
    url: process.env.NEXT_AGENT_WATCH_SITE_URL || "https://agent-watch-fe.onrender.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Agent Watch Dashboard Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Watch | Analytics for AI Agents & Workflows",
    description: "Powerful analytics, monitoring, and insights for your AI agents, workflow bots, and automations.",
    site: "@yourtwitter", // Update with your Twitter handle
    images: ["/opengraph-image.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="text-center bg-white border-b border-gray-200 py-12 px-4">
        <div className="flex flex-col items-center">
          <img src="/logo.png" alt="Agent Watch" className="w-16 mb-4" />
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Agent Watch</h1>
          <p className="max-w-xl text-lg text-gray-600 mb-6">
            Real-time analytics and insights for your AI Agents, LLM workflows, and automation teams.
          </p>
          <a
            href="#get-started"
            className="inline-block px-7 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow transition mb-2"
          >
            Start Monitoring My Agents
          </a>
        </div>
      </header>

      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-blue-700 text-2xl font-bold mb-4">Why Agent Watch?</h2>
        <ul className="space-y-3 text-base leading-7">
          <li>
            <span className="font-semibold text-gray-800">Instantly understand performance</span> and usage of every agent step, prompt, and completion.
          </li>
          <li>
            <span className="font-semibold text-gray-800">Track costs</span> and resource usage per agent, user, or team.
          </li>
          <li>
            <span className="font-semibold text-gray-800">Spot errors and bottlenecks</span> in multi-step workflows before they affect production.
          </li>
          <li>
            <span className="font-semibold text-gray-800">Powerful visualizations</span> show volume, error rates, and cost spikes over time.
          </li>
        </ul>
      </section>

      <section className="bg-white py-12 px-4">
        <h2 className="text-blue-700 text-2xl font-bold mb-7 text-center">Features</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Step-by-Step Analytics</h3>
            <p>See granular breakdowns for every step in your agent’s workflow: runs, errors, durations, tokens, and more.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Cost & Token Monitoring</h3>
            <p>Real-time and historical cost dashboard. Track tokens and session costs per agent and workflow.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Live Volume Charts</h3>
            <p>Monitor activity spikes, usage trends, and completions vs errors—by day, week, or hour.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Error & Status Insight</h3>
            <p>Quickly see which agents or steps have the most failures, so you can fix issues faster.</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-blue-700 text-2xl font-bold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2 mb-4 text-base">
          <li><span className="font-semibold">Integrate</span> Agent Watch SDK or connect your platform via API.</li>
          <li><span className="font-semibold">Deploy</span> your agents, workflows or LLM tasks as usual.</li>
          <li><span className="font-semibold">Monitor</span> via your personal analytics dashboard — get highlights, alerts, and easy exports.</li>
        </ol>
        <p className="text-gray-700">Perfect for engineering leads, product teams, or anyone running AI automations at scale.</p>
      </section>

      <section className="bg-white py-16 px-4" id="get-started">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-blue-700 text-2xl font-bold mb-2">Get Started</h2>
          <p className="mb-6 text-gray-700">Ready to take control of your AI agent analytics?</p>
          <a
            href="mailto:hello@agentwatch.app"
            className="inline-block px-7 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow transition"
          >
            Request Early Access
          </a>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm py-8">
        &copy; 2025 Agent Watch. All rights reserved.
      </footer>
    </main>
  );
}
