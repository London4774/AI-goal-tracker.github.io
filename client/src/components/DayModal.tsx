import { useState } from "react";
import { FaTimes, FaPlus } from "react-icons/fa";

type DayModalProps = {
  date: Date;
  onClose: () => void;
};

type Task = {
  id: number;
  text: string;
  done: boolean;
};



export default function DayModal({ date, onClose }: DayModalProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const safeDate = date ?? new Date();

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleDone = (id: number) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-start pt-20 z-50">
      <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl w-96 p-6 shadow-lg relative text-white">
        <button
          className="absolute top-3 right-3 text-white hover:text-red-500 transition-all"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Задачи на {safeDate.toDateString()}
        </h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Новая задача..."
            className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/30 text-white placeholder-green-200/50 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-green-500 rounded-xl hover:bg-green-600 transition-all"
          >
            <FaPlus />
          </button>
        </div>

        <ul className="space-y-2 max-h-64 overflow-y-auto">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-white/10 px-3 py-2 rounded-xl"
            >
              <span
                onClick={() => toggleDone(task.id)}
                className={`cursor-pointer ${task.done ? "line-through text-green-300" : ""}`}
              >
                {task.text}
              </span>
              <button
                onClick={() => removeTask(task.id)}
                className="text-red-400 hover:text-red-500 transition-all"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <button
          className="mt-4 w-full py-2 bg-yellow-500 hover:bg-yellow-600 rounded-xl transition-all"
          onClick={() => alert("AI улучшит ваш план (будет подключение к backend)")}
        >
          Улучшить план с AI
        </button>
      </div>
    </div>
  );
}
