import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import ResolvedList from "./components/ResolvedList";
import Footer from "./components/Footer";
import ticketsData from "./data/tickets.json";

function App() {
  // State management
  const [tickets, setTickets] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  // Initialize tickets from JSON - Load from localStorage first, fallback to JSON data
  useEffect(() => {
    const savedData = localStorage.getItem("ticketSystemData");
    if (savedData) {
      try {
        const {
          tickets: savedTickets,
          inProgressTasks: savedInProgress,
          resolvedTasks: savedResolved,
        } = JSON.parse(savedData);
        setTickets(savedTickets || ticketsData);
        setInProgressTasks(savedInProgress || []);
        setResolvedTasks(savedResolved || []);
      } catch (error) {
        // If parsing fails, use default data
        setTickets(ticketsData);
      }
    } else {
      setTickets(ticketsData);
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (
      tickets.length > 0 ||
      inProgressTasks.length > 0 ||
      resolvedTasks.length > 0
    ) {
      const dataToSave = {
        tickets,
        inProgressTasks,
        resolvedTasks,
      };
      localStorage.setItem("ticketSystemData", JSON.stringify(dataToSave));
    }
  }, [tickets, inProgressTasks, resolvedTasks]);

  // Add ticket to in-progress
  const handleAddToProgress = (ticket) => {
    // Check if already in progress
    if (inProgressTasks.find((t) => t.id === ticket.id)) {
      toast.info("This ticket is already in progress!");
      return;
    }

    // Update ticket status
    const updatedTicket = { ...ticket, status: "In-Progress" };

    // Add to in-progress list
    setInProgressTasks([...inProgressTasks, updatedTicket]);

    // Update the ticket in the main list
    setTickets(tickets.map((t) => (t.id === ticket.id ? updatedTicket : t)));

    toast.success(`Ticket "${ticket.title}" added to In-Progress!`);
  };

  // Complete a task (move from in-progress to resolved)
  const handleCompleteTask = (task) => {
    // Remove from in-progress
    setInProgressTasks(inProgressTasks.filter((t) => t.id !== task.id));

    // Add to resolved
    const resolvedTask = { ...task, status: "Resolved" };
    setResolvedTasks([...resolvedTasks, resolvedTask]);

    // Remove from main tickets list
    setTickets(tickets.filter((t) => t.id !== task.id));

    toast.success(`Ticket "${task.title}" has been resolved!`);
  };

  // Handle new ticket button (placeholder)
  const handleNewTicket = () => {
    toast.info("New Ticket form would open here!");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Navbar */}
      <Navbar onNewTicket={handleNewTicket} />

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
                    onAddToProgress={handleAddToProgress}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Task Status */}
          <div className="lg:col-span-1">
            <TaskStatus
              tasks={inProgressTasks}
              onComplete={handleCompleteTask}
            />

            {/* Resolved List */}
            <ResolvedList resolvedTickets={resolvedTasks} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
