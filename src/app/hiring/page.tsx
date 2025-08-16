export const metadata = {
  title: "Careers | Join Agent Watch",
  description:
    "We're hiring talented engineers, BDE, and creators to help us build the future of AI agent analytics.",
};

export default function HiringPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-extrabold text-blue-700 mb-4">
        We're Hiring!
      </h1>
      <p className="mb-7 text-lg text-gray-700">
        Join Agent Watch and help us build the future of AI agent analytics. If
        you are passionate about technology and want to work in a fast-growing
        SaaS startup, we want to hear from you!
      </p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Open Positions</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>
            <span className="font-semibold text-gray-800">
              React.js Developer
            </span>
          </li>
          <li>
            <span className="font-semibold text-gray-800">
              FastAPI Developer
            </span>
          </li>
          <li>
            <span className="font-semibold text-gray-800">
              Python Full Stack Engineer
            </span>
          </li>
          <li>
            <span className="font-semibold text-gray-800">
              Node.js Developer
            </span>
          </li>
          <li>
            <span className="font-semibold text-gray-800">
              Business Development Executive (BDE)
            </span>
          </li>
          <li>
            <span className="font-semibold text-gray-800">Content Creator</span>
          </li>
        </ul>
      </div>
      <div className="mb-7">
        <h2 className="text-lg font-semibold mb-2">Why Join Us?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Remote-first and flexible work environment</li>
          <li>Cutting-edge projects and fast-paced learning</li>
          <li>Supportive and driven team culture</li>
          <li>Opportunity to impact the future of AI automation analytics</li>
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-2">How to Apply</h2>
        <p>
          Email your resume and a short introduction to{" "}
          <a
            className="text-blue-700 underline"
            href="mailto:jobs@agentwatch.app"
          >
            jobs@agentwatch.app
          </a>
          .
        </p>
        <p>
          Don't see your exact role? If you love what we're building, pitch us
          anyway!
        </p>
      </div>
      <div className="text-gray-400 text-sm pt-6 border-t">
        &copy; 2025 Agent Watch. All rights reserved.
      </div>
    </main>
  );
}
