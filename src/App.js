
import './App.css';



import React from 'react';
import Homepage from './Homepage';
import BookingPage from './bookingComponents/BookingPage';
import ConfirmedBooking from './bookingComponents/ConfirmedBooking';
import { HashRouter, Route, Routes, Link } from "react-router-dom";




function App() {
  return (
<>
<HashRouter>
 <header>
      <div className="grid">
        <div className="logo">
          <img src="./assets/Logo.svg" alt="Company Logo" />
        </div>
        <div className="navHolder">

        <nav>
      <ul>
        <li>
          <Link to="/homepage">Homepage</Link>
        </li>
        <li>
          <Link to="/booking">Booking Page</Link>
        </li>

      </ul>

    </nav>


        </div>
      </div>

    </header>


<Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
</HashRouter>
</>
  );
}

export default App;
