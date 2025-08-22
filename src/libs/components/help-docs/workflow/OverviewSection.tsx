
const OverviewSection = () => (
  <section className="overview-section bg-white rounded-md shadow p-6">
    <h1 className="text-3xl font-bold mb-4">Welcome to Tavrix Insights Documentation</h1>
    <p className="mb-4 text-gray-700">
      <strong>Tavrix Insights</strong> lets you track, analyze, and automate AI Agent runs in real-time—whether you’re scraping leads, automating emails, or handling custom workflows.
    </p>
    <h2 className="text-2xl font-semibold mb-2">How to Add a New Agent</h2>
    <ol className="list-decimal list-inside text-gray-800 space-y-2 mb-4">
      <li>
        Navigate to <strong>Agents &gt; <a href={`${process.env.NEXT_PUBLIC_AGENT_WATCH_SITE_URL}/agents/add`} target='_blank' className="text-blue-600 hover:underline">Add New Agent</a></strong> from the sidebar.
      </li>
      <li>
        <strong>Fill Required Details:</strong> Name, Type, Model/LLM, plus optional tags, description, or avatar.
      </li>
      <li>
        <strong>Save to Register:</strong> Click <em>Save</em>. Your agent now appears in your list.
      </li>
      <li>
        <strong>Next Steps:</strong> After registering, continue to the “Connect Agent” section.
      </li>
    </ol>
    <p className="text-gray-600 italic">
      Agents are the core components that connect your automation workflows to Tavrix Insights. Register before sending session data.
    </p>
  </section>
);

export default OverviewSection;
