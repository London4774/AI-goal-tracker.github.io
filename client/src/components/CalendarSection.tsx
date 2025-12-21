import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

type CalendarSectionProps = {
  onSelectDay: (day: Date | undefined) => void;
};

export default function CalendarSection({ onSelectDay }: CalendarSectionProps) {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  
  const handleSelect = (day: Date | undefined) => {
    setSelected(day);
    onSelectDay(day);
  };

  return (
    <div className="mt-32 flex justify-start ml-10">
      <div className="bg-white/7 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl w-full">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={handleSelect}

          className="text-white"
        />
      </div>
    </div>
  );
}