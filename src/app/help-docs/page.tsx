// app/help-docs/page.tsx
import OverviewSection from '@/libs/components/help-docs/workflow/OverviewSection';
import ConnectFlowchartSection from '@/libs/components/help-docs/workflow/ConnectFlowchartSection';
import APIReferenceSection from '@/libs/components/help-docs/workflow/APIReferenceSection';
import TroubleshootingSection from '@/libs/components/help-docs/workflow/TroubleshootingSection';
import FAQSection from '@/libs/components/help-docs/workflow/FAQSection';

export default function HelpDocs() {
  return (
     <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full  px-8 py-10 space-y-6">
      <OverviewSection />
      <ConnectFlowchartSection />
      <APIReferenceSection />
      <TroubleshootingSection />
      <FAQSection />
    </div>
    </div>
  );
}
