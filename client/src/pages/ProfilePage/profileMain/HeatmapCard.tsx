import Card from "../../../components/ui/Card"


export default function Heatmap() {
  return (
    <section>
      <Card>
        <div className="rounded">
          <h2>HeatMap goal progress</h2>
        </div>
        <div className="mt-4 h-28 rounded bg-gray-100"></div>
      </Card>
    </section>
  );
}
