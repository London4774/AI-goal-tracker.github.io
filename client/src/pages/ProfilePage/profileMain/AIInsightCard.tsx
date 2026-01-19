import Card from "../../../components/ui/Card"

export default function AIInsightCard() {
  return (
    <section>
      <Card>
        <div className="rounded">
          <h2>AI INSIGHT</h2>
        </div>

        <div className="my-3">
          <p>
            "You are consistent in React, but skip algorithms. Focus suggestion:
            3x Codewars per week."
          </p>
        </div>
      </Card>
    </section>
  );
}
