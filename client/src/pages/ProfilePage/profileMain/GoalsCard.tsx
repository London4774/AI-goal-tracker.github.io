import Card from "../../../components/ui/Card"

export default function GoalsCard() {
  return (
    <section>
      <Card>
        <div className="rounded">
          <h2>Goals(Pinned)</h2>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <p>🎯 Learn React</p>
          <span> ========== 60%</span>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <p>🎯 Doing project</p>
          <span> ========== 60%</span>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <p>🎯 Codewars 6 kyu</p>
          <span> ========== 60%</span>
        </div>
      </Card>
    </section>
  );
}
