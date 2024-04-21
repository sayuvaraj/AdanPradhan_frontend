import React, { useEffect, useState, useRef } from "react";
import "./BookedStudents_style.css";
import ClgHeader from "./component/ClgHeader";
import { useReactToPrint } from "react-to-print";
import Footer from "./Footer";
import LoadingAnimation from "./LoadingAnimation";
import bookinglogo from './images/bookinglogo.png';

const DateRow = ({ date, onClickDate, selected }) => {
  return (
    <div className="date-container">
      <div
        className={`date-item ${selected ? "selected" : ""}`}
        onClick={() => onClickDate(date)}
      >
        <h2 className="selected-data" style={{color:' #97116a',textAlign:'center'}}>{date}</h2>
      </div>
    </div>
  );
};

const NoBookingsMessage = () => {
  return <div className="no-bookings-message">No bookings yet !!</div>;
};

const TodayList = () => {
  const [bookings, setBookings] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    try {
      const response = await fetch("https://adan-pradhan-backend.vercel.app/api/clg/courses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          clg_token: localStorage.getItem("clg_token"),
        },
      });
      const data = await response.json();
      setAvailableCourses(data.courses);
    } catch (error) {
      setError("Error fetching courses");
    }
  };

  const fetchBookingsForDate = async (date) => {
    try {
      const response = await fetch(`https://adan-pradhan-backend.vercel.app/api/clg/bookings`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          clg_token: localStorage.getItem("clg_token"),
        },
      });
      const data = await response.json();
      console.log(data);
      return data.bookings;
    } catch (error) {
      console.error("Error fetching bookings:", error);
      return [];
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      await fetchCourses();
      const dateArray = generateDateArray();
      setSelectedDates(dateArray);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const generateDateArray = () => {
    const currentDate = new Date();
    const dateArray = [];
    for (let i = -2; i <= 4; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i);
      dateArray.push(date.toISOString().slice(0, 10));
    }
    return dateArray;
  };

  const handleDateClick = async (date) => {
    setSelectedDate((prevDate) => (prevDate === date ? null : date));
    if (selectedDate !== date) {
      const bookings = await fetchBookingsForDate(date);
      setBookings(bookings);
    } else {
      setBookings([]);
    }
  };

  const filterBookingsByDateAndCourse = (date, course) => {
    return bookings.filter((booking) => {
      const bookingDate = new Date(booking.date);
      const selectedDateObj = new Date(date);
      return (
        bookingDate.toDateString() === selectedDateObj.toDateString() &&
        booking.courseOffered === course
      );
    });
  };

  const componentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Userdata",
    onAfterPrint: () => alert("Data saved in PDF"),
  });

  return (
    <>
      <ClgHeader />
      <div className="today-list-container">
        <h1 className="heading">Today's Bookings</h1>
        <div className="date-row">
          {selectedDates.map((date, index) => (
            <DateRow
              key={index}
              date={date}
              onClickDate={handleDateClick}
              selected={selectedDate === date}
            />
          ))}
        </div>
        {loading ? (
          <LoadingAnimation />
        ) : (
          selectedDate && (
            <div className="details-container" ref={componentPDF}>
              <center>
                <h2>Details for {selectedDate}</h2>
              </center>
              {availableCourses.map((course) => (
                <div key={`${selectedDate}-${course}`} className="course">
                  <center>
                    <h3>{course} <span><img src={bookinglogo}  width='100px' alt="booking logo"/></span></h3>
                  </center>
                  {filterBookingsByDateAndCourse(selectedDate, course)
                    .length > 0 ? (
                    <div className="table-container">
                      <table className="bookings-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>contact No</th>
                            <th>College Name</th>
                            <th>Slot Timings</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filterBookingsByDateAndCourse(selectedDate, course).map(
                            (booking, index) => (
                              <tr key={index}>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.contactNo}</td>
                                <td>{booking.collegeName}</td>
                                <td>{booking.slotTimings}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <NoBookingsMessage />
                  )}
                  <button className="btn" onClick={generatePDF}>
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          )
        )}
        {!loading && !bookings.length && <NoBookingsMessage />}
      </div>
      <Footer />
    </>
  );
};

export default TodayList;
