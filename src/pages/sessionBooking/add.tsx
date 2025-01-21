import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const SessionBooking: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date()); // Track the current month being viewed

  // Example available dates and times (this would normally come from an API)
  const availableDates = ["2025-01-22", "2025-01-23", "2025-01-25"]; // Example available dates
  const availableTimes = ["09:00 AM", "12:00 PM", "03:00 PM"]; // Example available times

  // Handle date selection
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time selection when date changes
  };

  // Handle time slot selection
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  // Check if a date is available
  const isAvailableDate = (date: Date) => {
    const formattedDate = date.toLocaleDateString(); // Converts the date to a string format (e.g., "1/22/2025")
    const availableFormattedDates = availableDates.map((availableDate) => {
      const availableDateObj = new Date(availableDate);
      return availableDateObj.toLocaleDateString(); // Format available dates as strings
    });
    return availableFormattedDates.includes(formattedDate);
  };

  // Handle form submission (booking the session)
  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      alert(
        `Session booked on ${selectedDate.toLocaleDateString()} at ${selectedTime}`
      );
    } else {
      alert("Please select a date and time");
    }
  };

  // Generate the calendar days for the current month
  const generateCalendar = () => {
    const startOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();
    const calendarDays = [];
    const firstDayOfWeek = startOfMonth.getDay();

    // Add empty slots for the first week
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(null);
    }

    // Add the days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      const day = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i
      );
      calendarDays.push(day);
    }

    return calendarDays;
  };

  // Format the month for display (e.g., "January 2025")
  const formatMonthYear = () => {
    return `${currentMonth.toLocaleString("default", {
      month: "long",
    })} ${currentMonth.getFullYear()}`;
  };

  // Navigate to the next month
  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  // Navigate to the previous month
  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  return (
    <div className="max-w-xl mx-auto p-6 pt-12">
      <Link
        to="/"
        className="text-teal-600 text-lg absolute left-4 font-bold top-4 "
      >
        STUDY PATH
      </Link>
      <h2 className="text-2xl font-semibold mb-4">Book a Meeting</h2>

      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={handlePrevMonth}
        >
          &lt; Prev
        </button>
        <span className="text-xl font-semibold">{formatMonthYear()}</span>
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={handleNextMonth}
        >
          Next &gt;
        </button>
      </div>

      {/* Days of the Week Header */}
      <div className="grid grid-cols-7 gap-4 mb-2 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-semibold">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4 mb-6">
        {generateCalendar().map((date, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg text-center cursor-pointer ${
              date
                ? isAvailableDate(date)
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-500"
                : "bg-transparent"
            } 
            ${
              selectedDate &&
              selectedDate?.toLocaleDateString() === date?.toLocaleDateString()
                ? "border-2 border-teal-500"
                : "border-2 border-gray-200"
            }`}
            onClick={() => date && handleDateClick(date)}
          >
            {date ? date.getDate() : ""}
          </div>
        ))}
      </div>

      {/* Time selection */}
      {selectedDate && isAvailableDate(selectedDate) && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Select a Time</h3>
          {availableTimes.map((time) => (
            <button
              key={time}
              className={`block w-full mb-2 py-2 text-center rounded-lg border border-gray-300 ${
                selectedTime === time
                  ? "bg-teal-600 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </button>
          ))}
        </div>
      )}

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 mb-4"
      >
        Book Session
      </button>
      <button
        onClick={() => navigate(-1)}
        className="w-full py-2 border border-red-500  rounded-lg text-red-500"
      >
        Cancel
      </button>
    </div>
  );
};

export default SessionBooking;
