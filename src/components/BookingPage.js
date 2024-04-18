import React from "react";
import PageView from './PageView';
import './Main.css';
import BookingForm from "./BookingForm";
function BookingPage() {
    return (
      <PageView isDarkBackground maxHeight='100vh' backgroundColor="#4e5e57">
        <BookingForm />
      </PageView>
    );
  }
export default BookingPage;