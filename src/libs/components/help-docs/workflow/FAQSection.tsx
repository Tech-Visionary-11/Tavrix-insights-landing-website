import React from "react";
import { Accordion, AccordionItem } from "../../Accordion";
 
const FAQSection: React.FC = () => {
  return (
    <section className="bg-white rounded-md shadow p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4">FAQs &amp; Support</h2>

      <Accordion>
        <AccordionItem title="How do I see connected agents?">
          Go to <em>Agents &gt; Agents</em>. All registered and active agents are listed there.
        </AccordionItem>

        <AccordionItem title="Where do I find session history?">
          Go to <em>Agents</em>, then click the <strong>View</strong> button for the desired
          agent in the table. This will take you to the agent’s detail page, where you can see
          all sessions associated with that agent, including their status, metrics, and any
          errors.
        </AccordionItem>

        <AccordionItem title="Does Tavrix Insights work with low-code drag-and-drop workflow tools (e.g., n8n)?">
          Yes, Tavrix Insights integrates smoothly with low-code platforms like{" "}
          <strong>n8n</strong> by using its API endpoints. In your n8n workflows, you can
          configure HTTP request nodes to call Tavrix Insights REST API to create sessions,
          send logs, and close sessions. This allows you to track and analyze automation
          runs without writing code—just provide your API token and follow the documented
          endpoints.
        </AccordionItem>

        <AccordionItem title="How do I contact support?">
          Email us at <code>mandliyarajendra1@gmail.com</code>.
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
