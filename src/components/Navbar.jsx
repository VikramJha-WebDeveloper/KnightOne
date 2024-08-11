import React, {useContext} from "react";
import { themeContext } from "../App";
import styled from "styled-components";

const Navbar = () => {
    const NavSection = styled.div`
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      
    `
    const theme = useContext(themeContext);
    return(<NavSection>
      <nav className="navbar bg-dark opacity-75 navbar-expand-lg" data-bs-theme="dark">
        <div className="container">
            <h1>
            <a href="#" className="navbar-brand fw-bolder">KnightOne</a>
            </h1>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navCollapse" className="collapse navbar-collapse">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a href="#home" className="nav-link px-3">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link px-3">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link px-3">Services</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="#pricing" className="nav-link px-3">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-3">Dropdown</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link px-3">Contact</a>
                    </li>
                </ul>
                <button className={`btn text-light`} style={{backgroundColor: `${theme.themeColor}`}}>Get Started</button>
            </div>
        </div>

      </nav>
    </NavSection>);
};

export default Navbar;