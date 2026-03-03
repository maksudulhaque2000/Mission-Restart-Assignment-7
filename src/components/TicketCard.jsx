import React from "react";

const TicketCard = ({ ticket, onAddToProgress }) => {
  const getPriorityClass = (priority) => {
    if (priority.includes("HIGH")) return "priority-high";
    if (priority.includes("MEDIUM")) return "priority-medium";
    return "priority-low";
  };

  const getStatusClass = (status) => {
    return status === "Open" ? "status-open" : "status-in-progress";
  };

  return (
    <div
      onClick={() => onAddToProgress(ticket)}
      className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition cursor-pointer border border-gray-200"
    >
      {/* Title and Status */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-base font-semibold text-gray-800 flex-1 pr-3">
          {ticket.title}
        </h3>
        <span className={`status-badge ${getStatusClass(ticket.status)}`}>
          ● {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {ticket.description}
      </p>

      {/* Meta Information */}
      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <span className="flex items-center gap-1">
          #{ticket.id} · {ticket.customer}
        </span>
        <span className="flex items-center gap-1">📅 {ticket.createdAt}</span>
      </div>

      {/* Priority Badge */}
      <div>
        <span className={`status-badge ${getPriorityClass(ticket.priority)}`}>
          {ticket.priority}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;
