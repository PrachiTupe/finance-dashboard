import OverallSummaryViewers from "@/components/sections/analytics/OverallSummaryManager";
import UserSummaryViewers from "@/components/sections/analytics/UserSummaryViewers";
import CategoriesSummaryViewers from "@/components/sections/analytics/CategoriesSummaryViewers";
import UserCategoriesSummaryViewers from "@/components/sections/analytics/UserCategoriesSummaryViewers";
import OverallSummaryManager from "@/components/sections/analytics/OverallSummaryManager";

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* 🔥 Top Overview */}
      <OverallSummaryManager />



      {/* 👥📊 User-wise Category Breakdown */}
      <UserCategoriesSummaryViewers />
    </div>
  );
}