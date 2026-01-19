import AIInsightCard from "./profileMain/AIInsightCard";
import GoalsCard from "./profileMain/GoalsCard"
import Heatmap from "./profileMain/HeatmapCard"
import TimelineCard from "./profileMain/TimelineCard";

export default function ProfileMain() {
  return (
    <main className="space-y-6">
      {/* HeatMap goal progress */}
      <Heatmap />

      {/* Goals(PINNED) */}
      <GoalsCard />

      {/* AI INSIGHT */}
      <AIInsightCard/>

      {/* timeline */}
      <TimelineCard/>
    </main>
  );
}
