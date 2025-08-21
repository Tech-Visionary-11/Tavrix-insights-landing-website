import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Tavrix Insights | Analytics for AI Agents & Workflows",
    description:
      "Tavrix Insights is Real-time analytics, monitoring, and cost insights for your AI agents, LLM workflows, and automations.",
    keywords: [
      "AI agents",
      "LLM workflows",  
      "analytics",
      "monitoring",
      "cost insights",
      "automation",
      "agent performance",
      "real-time analytics",
      "AI monitoring",
      "workflow analytics",
      "agent insights",
      "AI performance",
      "agent monitoring",
      "LLM monitoring",
      "AI automation",
      "agent cost tracking",
      "AI agent analytics",
      "workflow monitoring",    
      "agent performance metrics",
      "AI workflow insights",
      "agent error tracking",
      "AI agent performance",
      "LLM agent monitoring",
      "AI agent cost monitoring",
      "AI agent workflow",
      "AI agent performance tracking",
      "AI agent error monitoring",
      "AI agent workflow analytics",
      "AI agent performance insights",
      "AI agent workflow monitoring",
      "AI agent performance metrics",
      "AI agent workflow performance",
      "AI agent workflow insights",
      "AI agent workflow monitoring",
      "AI agent workflow analytics",
      "AI agent workflow performance tracking",
      "AI agent workflow error tracking",
      "AI agent workflow cost monitoring",  
      "Tavrix Insights",
      "Tavrix",
      "Tavrix Insights Analytics",
      "Tavrix Insights Monitoring",
      "Tavrix Insights Cost Insights",
      "Tavrix Insights AI Agents",
      "Tavrix Insights LLM Workflows",
      "Tavrix Insights Automation",
      "Tavrix Insights Agent Performance",
      "agent watch",
      "agent watch analytics",
    ],
      openGraph: {
      title: "Tavrix Insights | Analytics for AI Agents & Workflows",
      description:
        "Tavrix Insights, agent watch,Powerful analytics, monitoring, and insights for your AI agents, workflow bots, and automations.",
      url: process.env.NEXT_PUBLIC_AGENT_WATCH_SITE_URL,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/agent-connection-flow.png",
          width: 1200,
          height: 630,
          alt: "Tavrix Insights Flowchart",
        },
      ],
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title: "Agent Watch | Analytics for AI Agents & Workflows",
    //   description: "Powerful analytics, monitoring, and insights for your AI agents, workflow bots, and automations.",
    //   site: "@yourtwitter", // Update with your Twitter handle
    //   images: ["/opengraph-image.png"],
    // },
  };
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="text-center bg-white border-b border-gray-200 py-12 px-4">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="Tavrix Insights Logo"
            width={64}
            height={64}
            className="w-16 mb-4"
            priority
          />

          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Tavrix Insights
          </h1>
          <p className="max-w-xl text-lg text-gray-600 mb-6">
            Real-time analytics and insights for your AI Agents, LLM workflows,
            and automation teams.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_AGENT_WATCH_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer px-7 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow transition mb-2"
          >
            Start Monitoring My Agents
          </a>
        </div>
      </header>

      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-blue-700 text-2xl font-bold mb-4">
          Why Tavrix Insights?
        </h2>
        <ul className="space-y-3 text-base leading-7">
          <li>
            <span className="font-semibold text-gray-800">
              Instantly understand performance
            </span>{" "}
            and usage of every agent step, prompt, and completion.
          </li>
          <li>
            <span className="font-semibold text-gray-800">Track costs</span> and
            resource usage per agent, user, or team.
          </li>
          <li>
            <span className="font-semibold text-gray-800">
              Spot errors and bottlenecks
            </span>{" "}
            in multi-step workflows before they affect production.
          </li>
          <li>
            <span className="font-semibold text-gray-800">
              Powerful visualizations
            </span>{" "}
            show volume, error rates, and cost spikes over time.
          </li>
        </ul>
      </section>

      <section className="bg-white py-12 px-4">
        <h2 className="text-blue-700 text-2xl font-bold mb-7 text-center">
          Features
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">
              Step-by-Step Analytics
            </h3>
            <p>
              See granular breakdowns for every step in your agent’s workflow:
              runs, errors, durations, tokens, and more.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">
              Cost & Token Monitoring
            </h3>
            <p>
              Real-time and historical cost dashboard. Track tokens and session
              costs per agent and workflow.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Live Volume Charts</h3>
            <p>
              Monitor activity spikes, usage trends, and completions vs
              errors—by day, week, or hour.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">
              Error & Status Insight
            </h3>
            <p>
              Quickly see which agents or steps have the most failures, so you
              can fix issues faster.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-blue-700 text-2xl font-bold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2 mb-4 text-base">
          <li>
            <span className="font-semibold">Integrate</span>Tavrix Insights SDK or
            connect your platform via API.
          </li>
          <li>
            <span className="font-semibold">Deploy</span> your agents, workflows
            or LLM tasks as usual.
          </li>
          <li>
            <span className="font-semibold">Monitor</span> via your personal
            analytics dashboard — get highlights, alerts, and easy exports.
          </li>
        </ol>
        <p className="text-gray-700">
          Perfect for engineering leads, product teams, or anyone running AI
          automations at scale.
        </p>
      </section>

      <section className="bg-white py-16 px-4" id="get-started">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-blue-700 text-2xl font-bold mb-2">Get Started</h2>
          <p className="mb-6 text-gray-700">
            Explore our docs and start integrating your AI agents today.</p>
          <Link
            href="/help-docs"
            className="inline-block px-7 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow transition"
          >
            View Documentation
          </Link>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm py-8">
        &copy; 2025 Tavrix Insights. All rights reserved.
      </footer>
    </main>
  );
}
