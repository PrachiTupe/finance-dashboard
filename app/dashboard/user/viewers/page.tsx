import AddViewers from "@/components/sections/viewers/AddViewers";
import DisplayViewers from "@/components/sections/viewers/DisplayViewers";

export default function ViewerPage() {
  return (
    <div className="space-y-6">
      {/* 🔥 Viewers Section */}
      <DisplayViewers />
      <AddViewers />
    </div>
  );
}