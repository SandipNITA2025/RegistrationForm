import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document
    .querySelector("html")
    .addEventListener("click", () => setIsNavOpen(false));

  return (
    <>
      <NavBar state={isNavOpen ? 1 : 0}>
        <div className="logo">
          <Link to='/'><h3>LOGO.</h3></Link>
        </div>

        <div className="toggle">
          {isNavOpen ? (
            <MdClose style={{color:'white'}} onClick={() => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu style={{color:'white'}}
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
            />
          )}
        </div>

        <div className={`links ${isNavOpen ? "show" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>{" "}
            </li>
          </ul>
        </div>
      </NavBar>
    </>
  );
};

export default Navbar;

const NavBar = styled.nav`
 width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: tomato;
  .logo {
    h3 {
      color: white;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    ul {
      display: flex;
      li {
        padding: 0 0.8rem;
        a {
          color: white;
        }
      }
    }
  }

  @media screen and (max-width: 650px) {
    position: relative;
    .toggle {
      display: block;
      z-index: 5;
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      opacity: 1;
      visibility: hidden;
      top: 0;
      right: 0%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);
      width: 70%;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li{
            margin-bottom: 1.2rem;
            font-size: 1.1rem;
        }
      }
    }
  }
`;
