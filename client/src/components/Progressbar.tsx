import { ResponsiveContainer, RadialBar, RadialBarChart, PolarAngleAxis} from "recharts";

export default function Progressbar() {

    const chartData = [
        {name: "progress", value: 100, fill: "#22c55e"},
        {name: "background", value: 30, fill: "#ffff20"},
        {name: "background", value: 40, fill: "#ffff20"},

    ];

  const progressValue = 68;

  return (
     <div className="bg-white/5 backdrop-blur-2xl border border-white/30 w-full rounded-2xl p-6">
        <span className="text-white text-xl font-bold">Прогресс за неделю</span>
            <div className="relative w-full h-64 mb-4">
              <ResponsiveContainer width={"100%"} height={255}>
                <RadialBarChart 
                  cx="50%"
                  cy="50%"
                  innerRadius={"60%"}
                  outerRadius={"90%"}
                    data={chartData}
                  barSize={25}
                  startAngle={90}
                  endAngle={-270}
                  >
                    <RadialBar 
                        dataKey={"value"}
                        cornerRadius={10}
                        background={{ fill: chartData[0].fill }} 
                        fill={chartData[1].fill}    
                    />
                        <PolarAngleAxis type="number" domain={[0, 100]} tick={false}/>
              </RadialBarChart>
            </ResponsiveContainer>
    
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <span className="text-4xl font-black text-white">
                  {progressValue}%
                </span>
                    <p className="text-white/70 text-sm mt-2">выполнено</p>
              </div>
            </div>

            <p className="text-center text-white font-medium">
              Продолжай в том же духе! 🔥
            </p>
    
        </div>
    </div>
  )
}
