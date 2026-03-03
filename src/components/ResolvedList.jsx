import React from "react";

const ResolvedList = ({ resolvedTickets }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-1">Resolved Task</h2>
      <p className="text-sm text-gray-500 mb-4">No resolved task yet.</p>

      {resolvedTickets.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400 text-sm">No resolved tasks</p>
        </div>
      ) : (
        <div className="space-y-3">
          {resolvedTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-green-50 border border-green-200 rounded-md p-4"
            >
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {ticket.title}
              </h3>
              <p className="text-xs text-gray-600">
                {ticket.customer} · Completed
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResolvedList;
