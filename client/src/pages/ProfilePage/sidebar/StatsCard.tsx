import Card from "./../../../components/ui/Card";

export default function StatsCard() {
  return (
    <Card>
      <div className="rounded font-bold">
        <p>Statistics</p>
      </div>
      <div className="mt-3 space-y-2">
        <div className="rounded">
          <p>🎯 Active</p>
        </div>
        <div className="rounded">
          <p>✅ Done</p>
        </div>
        <div className="rounded">
          <p>🔥 Streak</p>
        </div>
      </div>
    </Card>
  );
}
