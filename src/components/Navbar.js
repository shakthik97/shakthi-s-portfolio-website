import "./NavbarStyles.css"
import { Link } from 'react-router-dom';

import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className="header">
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to={"/"}><h1>Home</h1></Link>
                </li>

                <li>
                    <Link to={"/Project"}><h1>Projects</h1></Link>
                </li>

                <li>
                    <Link to={"/Contact"}><h1>Contact</h1></Link>
                </li>

                <li>
                    <Link to={"/About"}><h1>About</h1></Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>

                {click ? (
                    <FaTimes size={30} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={30} style={{
                        color: "#fff"
                    }} />
                )}


            </div>
        </div>
    )
}

export default Navbar