import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { Button } from 'react-bootstrap';
import { AiOutlineProject } from 'react-icons/ai';
import { RiFilePaper2Line } from 'react-icons/ri';
import { BsChevronDown } from 'react-icons/bs';
import img1 from '../../pages/images/img-1.jpg';
function Navbar1() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      console.log(window.scrollY);
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <>
      <div className={navbar ? 'navbar scroll' : 'navbarMain'}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={handleClick}>
            <i className="fas fa-microchip" />
            BK-RECME
          </Link>
        </div>
        <div className="navbar-container">
          <Link to="/" className="dropbtn">
            <div className="dropdown">
              <span className="edit-navbar-icons">
                <AiOutlineHome />
              </span>
              HOME
            </div>
          </Link>
          <Link to="/peoples" className="dropbtn ">
            <div className="dropdown">
              <span className="edit-navbar-icons">
                <BsPeople />
              </span>
              PEOPLE
              <span className="edit-navbar-icons">
                <BsChevronDown />
              </span>
              <div class="dropdown-content">
                <Link to="/professors" className="dropList">
                  Professors
                </Link>
                <Link to="/researcher" className="dropList">
                  Reseachers
                </Link>
                <Link to="/students" className="dropList">
                  Students
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/turtorials" className="dropbtn ">
            <div className="dropdown">
              <span className="edit-navbar-icons">
                <IoDocumentTextOutline />
              </span>
              TURTORIALS
              <span className="edit-navbar-icons">
                <BsChevronDown />
              </span>
              <div className="dropdown-content">
                <Link to="mechanical" className="dropList">
                  Mechanical
                </Link>
                <Link to="/iots" className="dropList">
                  IoTs
                </Link>
                <Link to="/ai" className="dropList">
                  AI
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/project" className="dropbtn ">
            <div className="dropdown">
              <span className="edit-navbar-icons">
                <AiOutlineProject />
              </span>
              PROJECTS
            </div>
          </Link>
          <Link to="/publication" className="dropbtn ">
            <div className="dropdown">
              <span className="edit-navbar-icons">
                <RiFilePaper2Line />
              </span>
              PUBLICATION
              <div className="dropdown-content">
                <Link to="/" className="dropList">
                  2017
                </Link>
                <Link to="/" className="dropList">
                  2018
                </Link>
                <Link to="/" className="dropList">
                  2019
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/login">
            <Button variant="primary">Login</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar1;
