import React, { useState, useEffect } from 'react'; // Import React and useState
import { Link } from 'react-router-dom';

import Menubar from '../../components/Menubar/Menubar'

const Header = () => {
  return (
    <div className="bg-dark py-3 ">
         <Link to="/"><Menubar/></Link>
    </div>
  );
};

export default Header;
