import OverallSummary from "@/components/sections/analytics/OverallSummary";
import CategoryWiseSummary from "@/components/sections/analytics/CategoryWiseSummary";


export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
        <OverallSummary />
        <CategoryWiseSummary />

    </div>
  );
}