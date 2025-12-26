import React from "react";
const tasks = [
  {
    id: 1,
    title: "Design Dashboard UI",
    description: "Create a responsive dashboard layout",
    status: "Pending",
    dueDate: "2025-01-10",
  },
  {
    id: 2,
    title: "API Integration",
    description: "Connect frontend with backend API",
    status: "In Progress",
    dueDate: "2025-01-15",
  },
  {
    id: 3,
    title: "Deploy Application",
    description: "Deploy project to Vercel",
    status: "Completed",
    dueDate: "2025-01-05",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
};

function TaskList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
        >
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800">
            {task.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-1">
            {task.description}
          </p>

          {/* Status + Due Date */}
          <div className="flex justify-between items-center mt-4">
            <span
              className={`px-3 py-1 text-xs rounded-full font-medium ${statusColors[task.status]}`}
            >
              {task.status}
            </span>

            <span className="text-xs text-gray-500">
              Due: {task.dueDate}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
