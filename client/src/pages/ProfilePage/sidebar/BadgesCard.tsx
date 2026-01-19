import Card from "./../../../components/ui/Card";

export default function BadgesCard() {
  return (
    <Card>
      <div className="rounded font-bold">
        <p>Badges</p>
      </div>
      <div className="mt-3 space-y-2">
        <div className="rounded">
          <p>🏆 7 days</p>
        </div>
        <div className="rounded">
          <p>🧠 Focused</p>
        </div>
      </div>
    </Card>
  );
}
