import React, { useState } from "react";
import { Link } from "react-router";

type Session = {
  id: string;
  date: string; // Date in string format "YYYY-MM-DD"
  time: string; // Time in string format "HH:mm AM/PM"
  status: string; // Status of the session (e.g., "Booked", "Completed", "Cancelled")
  userName: string; // User name who booked the session
};

const BookedSessions: React.FC = () => {
  // Example booked sessions data
  const [sessions] = useState<Session[]>([
    {
      id: "1",
      date: "2025-01-22",
      time: "09:00 AM",
      status: "Booked",
      userName: "John Doe",
    },
    {
      id: "2",
      date: "2025-01-23",
      time: "12:00 PM",
      status: "Completed",
      userName: "Jane Smith",
    },
    {
      id: "3",
      date: "2025-01-25",
      time: "03:00 PM",
      status: "Cancelled",
      userName: "Alice Brown",
    },
  ]);

  // Function to cancel a session
  const handleCancelSession = (sessionId: string) => {
    alert(`Session with ID: ${sessionId} has been cancelled.`);
  };

  // Function to reschedule a session
  const handleRescheduleSession = (sessionId: string) => {
    alert(`Session with ID: ${sessionId} is being rescheduled.`);
  };

  return (
    <div className=" p-6 pt-16 bg-teal-50 rounded-lg h-screen flex flex-col items-center ">
      <Link
        to="/"
        className="text-teal-600 text-lg absolute left-4 font-bold top-4 "
      >
        STUDY PATH
      </Link>

      <h2 className="text-3xl font-semibold text-center text-teal-600 mb-6">
        Your Booked Meeting
      </h2>
      <div className="text-center mb-6">
        <Link
          to="/book/add"
          className="px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Book a Session
        </Link>
      </div>

      {sessions.length === 0 ? (
        <p className="text-center text-gray-500">
          You have no sessions booked yet.
        </p>
      ) : (
        <div className="space-y-6 max-w-4xl w-full">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="bg-white rounded-lg p-6  transition-all duration-300"
            >
              <div className="flex justify-between mb-4">
                <div className="text-xl font-semibold text-gray-800">
                  {session.userName}
                </div>
                <div className="text-sm text-gray-500">{session.date}</div>
              </div>
              <div className="text-sm text-gray-600">Time: {session.time}</div>
              <div
                className={`text-sm font-semibold mt-2 ${
                  session.status === "Booked"
                    ? "text-yellow-600"
                    : session.status === "Completed"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                Status: {session.status}
              </div>

              {/* Action Buttons */}
              {session.status === "Booked" && (
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleCancelSession(session.id)}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg transition duration-200 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  >
                    Cancel Session
                  </button>
                  <button
                    onClick={() => handleRescheduleSession(session.id)}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Reschedule
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedSessions;
