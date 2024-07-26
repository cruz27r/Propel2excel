import React, { useState } from 'react';
import logo from './Logo-P2e-final-v1Asset 12.c5f9e3075a4365128160.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} width={300} alt="Logo" />
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/students">Students</a></li>
        <li><a href="/volunteer">Volunteer</a></li>
        <li><a href="/partners">Partners</a></li>
        <li><a href="/excel-here" className="excel-button">Excel Here</a></li>
      </ul>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;


// import React from 'react';
// import logo from './Logo-P2e-final-v1Asset 12.c5f9e3075a4365128160.png';
// import './Navbar.css';


// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src={logo} width={300}/>
//       </div>
//       <ul className="nav-links">
//         <li><a href="/">Home</a></li>
//         <li><a href="/students">Students</a></li>
//         <li><a href="/volunteer">Volunteeer</a></li>
//         <li><a href="/partners">Partners</a></li>
//         <li><a href="/excel-here" className="excel-button">Excel Here</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import LogoImage from "../../assets/images/Logo-P2e-final-v1Asset 12.c5f9e3075a4365128160.png";

// function Navbar () {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav className='navbar'>
//         <div className='navbar-container'>
//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//           <img src={LogoImage} alt='logo' width={200}/>
//           </Link>
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Students
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Coaches
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Partners
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to='/'
//                 className='nav-links-mobile'
//                 onClick={closeMobileMenu}
//               >
//                 EXCEL HERE
//               </Link>
//             </li>
//           </ul>
//           {button && <Button buttonStyle='btn--outline'>EXCEL HERE</Button>}
//         </div>
//       </nav>
//     </>
//   );
// };



// export default Navbar;




  