import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import TicketCard from "../components/TicketCard";
import TaskStatus from "../components/TaskStatus";
import ResolvedList from "../components/ResolvedList";

const Home = ({
  tickets,
  inProgressTasks,
  resolvedTasks,
  onAddToProgress,
  onCompleteTask,
}) => {
  return (
    <>
      {/* Banner with Stats */}
      <Banner
        inProgressCount={inProgressTasks.length}
        resolvedCount={resolvedTasks.length}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Customer Tickets (2 columns) */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Customer Tickets
            </h2>

            {tickets.length === 0 ? (
              <div className="bg-white rounded-lg p-12 text-center shadow-sm">
                <p className="text-gray-400">
                  All tickets have been resolved! 🎉
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onAddToProgress={onAddToProgress}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Task Status */}
          <div className="lg:col-span-1">
            <TaskStatus tasks={inProgressTasks} onComplete={onCompleteTask} />

            {/* Resolved List */}
            <ResolvedList resolvedTickets={resolvedTasks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
