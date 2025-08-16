
const TroubleshootingSection = () => (
  <section className="troubleshooting-section bg-white rounded-md shadow p-6 mt-8">
    <h2 className="text-2xl font-semibold mb-4">Common Troubleshooting</h2>
    <ul className="list-disc pl-6 text-gray-800 space-y-2">
      <li>
        <strong>401 Unauthorized:</strong> Check your <code>Authorization</code> token.
      </li>
      <li>
        <strong>404 Not Found:</strong> The <code>agent_id</code> or <code>session_id</code> may be incorrect.
      </li>
      <li>
        <strong>Input Payload Errors:</strong> Ensure JSON structures and required fields match API reference.
      </li>
      <li>
        <strong>Status not Updating:</strong> Confirm your agent posts logs and closes session at workflow end.
      </li>
    </ul>
  </section>
);

export default TroubleshootingSection;
