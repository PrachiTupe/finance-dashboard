import OverallSummaryViewers from "@/components/sections/analytics/OverallSummaryViewers";
import UserSummaryViewers from "@/components/sections/analytics/UserSummaryViewers";
import CategoriesSummaryViewers from "@/components/sections/analytics/CategoriesSummaryViewers";
import UserCategoriesSummaryViewers from "@/components/sections/analytics/UserCategoriesSummaryViewers";

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* 🔥 Top Overview */}
      <OverallSummaryViewers />

      {/* 👥 Per User Summary */}
      <UserSummaryViewers />

      {/* 📊 Category Breakdown */}
      <CategoriesSummaryViewers />

      {/* 👥📊 User-wise Category Breakdown */}
      <UserCategoriesSummaryViewers />
    </div>
  );
}