
import React from 'react';

import { Link } from "react-router-dom";














function Nav() {

    return (


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

    );

}

export default Nav;