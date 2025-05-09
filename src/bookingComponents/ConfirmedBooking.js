import '../App.css'
import '../Booking.css';



import React from "react";

const ConfirmedBooking = ({ formData }) => {
    return (
        <div className="confirmedBooking">
              <div className="confirmedBookingInner">
            <h2>Booking Confirmed!</h2>
            <p>Thank you, {formData.firstname} {formData.lastname}, for your reservation.</p>
            <p><strong>Party Size:</strong> {formData.partysize}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Email:</strong> {formData.email}</p>
        </div></div>
    );
};

export default ConfirmedBooking;