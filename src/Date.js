import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SelectDate.css'; // Import your CSS file for styling

const SelectDate = () => {
  // State to store selected date
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container">
      <h2 className="title">Select Date</h2>
      <div className="datepicker-container">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()} // Allow selection from today onwards
          maxDate={new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000)} // Allow selection for the next 4 days
          dateFormat="yyyy-MM-dd"
          className="datepicker"
        />
      </div>
      {selectedDate && <p className="selected">You selected: {selectedDate.toISOString().slice(0, 10)}</p>}
    </div>
  );
};

export default SelectDate;
