import Image from 'next/image';

const ConnectFlowchartSection = ({ agentId = "your-agent-id-here" }: { agentId?: string }) => {
  return (
    <section className="connect-flowchart-section bg-white rounded-md shadow p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4">Connecting Your Agent — Data Flow Overview</h2>
      <p className="text-gray-700 mb-6">
        Once your agent is registered, you can push session data so Tavrix Insights can visualize and track activity.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start mb-8">
        <figure className="flex-1 flex flex-col items-center">
          <Image
            src="/assets/agent-connection-flow.png"
            alt="Agent Registration/Data Connection Flow"
            className="w-full max-w-2xl"
            style={{ height: 'auto' }}
            width={600}
            height={315}
          />
          <figcaption className="text-sm text-gray-500 mt-2">Agent Registration/Connection Flow</figcaption>
        </figure>
        <figure className="flex-1 flex flex-col items-center">
          <Image
            src="/assets/session-connection-flow.png"
            alt="Session Data Flow"
            className="w-full max-w-2xl"
            style={{ height: 'auto' }}
            width={600}
            height={315}
          />
          <figcaption className="text-sm text-gray-500 mt-2">Session &amp; Log Data Flow</figcaption>
        </figure>
      </div>
      <pre className="bg-gray-100 rounded p-4 mb-3 text-gray-800 overflow-x-auto">
        Add Agent → Create Session → Add Logs (During Execution) → Close Session (Completed/Error)
      </pre>
      <ol className="list-decimal list-inside text-gray-800 space-y-2">
        <li>
          <strong>Add Agent:</strong> Register your automation workflow in Tavrix Insights.
        </li>
        <li>
          <strong>Create Session:</strong> Start a workflow run (each session tracks a single agent execution).
        </li>
        <li>
          <strong>Add Logs:</strong> Send real-time logs as your workflow progresses for monitoring and analytics.
        </li>
        <li>
          <strong>Close Session:</strong> Mark as completed or error and include the final summary/output.
        </li>
      </ol>
      {agentId && (
        <p className="text-blue-600 mt-4">
          These steps apply to <strong>Agent ID: {agentId}</strong>.
        </p>
      )}
    </section>
  );
};

export default ConnectFlowchartSection;
