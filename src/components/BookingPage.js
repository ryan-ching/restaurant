import React from "react";
import PageView from './PageView';
import './BookingForm.css';
import BookingForm from "./BookingForm";
function BookingPage() {
    const [bookingInfo, setBookingInfo] = React.useState({
        date: "",
        time: "",
        partySize: "",
        occasion: ""
        });
    const handleBookingChange = (data) => {
        setBookingInfo({...bookingInfo, ...data});
    }
    return (
      <PageView isDarkBackground height='100vh' backgroundColor="#4e5e57">
        <BookingForm 
            completed={bookingInfo.completed}
            name={bookingInfo.name}
            date={bookingInfo.date}
            hours={bookingInfo.hours}
            minutes={bookingInfo.minutes}
            partySize={bookingInfo.partySize}
            occasion={bookingInfo.occasion}
            onSubmit={handleBookingChange} />
        <div className="form-grid" style={{marginLeft:"100px"}}>
            <h1 className="booking-text">
                Booking Status - {bookingInfo.completed ? "CONFIRMED" : "UNCONFIRMED"}
            </h1>
            <p className="booking-text">Name: {bookingInfo.name}</p>
            <p className="booking-text">Date: {bookingInfo.date}</p>
            <p className="booking-text">
                Time: {bookingInfo.hours} {bookingInfo.hours && bookingInfo.minutes ? ":" : ""} {bookingInfo.minutes} {bookingInfo.hours && bookingInfo.minutes ? "PM" : ""}
            </p>
            <p className="booking-text">Party Size: {bookingInfo.partySize}</p>
            <p className="booking-text">Occasion: {bookingInfo.occasion}</p>
        </div>
      </PageView>
    );
  }
export default BookingPage;