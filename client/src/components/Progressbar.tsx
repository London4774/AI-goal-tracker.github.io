import { ResponsiveContainer, RadialBar, RadialBarChart, PolarAngleAxis } from "recharts";

type ProgressbarProps = {
  value: number; // 0..100
  title?: string;
  subtitle?: string;
};

export default function Progressbar({
  value,
  title = "Прогресс за неделю",
  subtitle = "выполнено",
}: ProgressbarProps) {
  const safeValue = Math.max(0, Math.min(100, Math.round(value)));

  // 2 слоя: фон (100) + прогресс (safeValue)
  const chartData = [
    { name: "bg", value: 100, fill: "rgba(255,255,255,0.12)" },
    { name: "progress", value: safeValue, fill: "#22c55e" },
  ];

  return (
    <div className="bg-white/5 backdrop-blur-2xl border border-white/30 w-full rounded-2xl p-6">
      <span className="text-white text-xl font-bold">{title}</span>

      <div className="relative w-full h-64">
        <ResponsiveContainer width="100%" height={255}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="90%"
            data={chartData}
            barSize={25}
            startAngle={90}
            endAngle={-270}
          >
            {/* Фон */}
            <RadialBar dataKey="value" data={[chartData[0]]} cornerRadius={12} />

            {/* Прогресс */}
            <RadialBar dataKey="value" data={[chartData[1]]} cornerRadius={12} />

            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <span className="text-4xl font-black text-white">{safeValue}%</span>
            <p className="text-white/70 text-sm mt-2">{subtitle}</p>
          </div>
        </div>
      </div>

      <p className="text-center text-white/90 font-medium mt-2">
        {safeValue >= 80 ? "Супер темп! 🔥" : safeValue >= 40 ? "Хорошо идёшь 👍" : "Начни с малого — и разгонишься 💪"}
      </p>
    </div>
  );
}
