import Card from "../../../components/ui/Card"

export default function TimelineCard() {
  return (
    <section>
        <Card>
          <div className="rounded">
            <h2>TIMELINE</h2>
          </div>

          <div className="my-3">
            <ul className="list-disc pl-5 space-y-1">
              <li>Week 1 – Goal created</li>
              <li>Week 2 – First milestone</li>
              <li>Week 4 – Drop in activity</li>
              <li>Week 5 – Recovery 🔥</li>
            </ul>
          </div>
        </Card>
      </section>
  )
}
