import React from 'react'
import './Navbar.css'
import logo from '../../Images/FE-logo.jpg'


function Navbar() {

    return (
        <nav className="nav-design-template">
            <div className="nav-design-left">
                <div className="nav-design-left-row-one">
                    <img className="nav-design-image" src={logo} />
                    <h1>FitnessTracker</h1>
                </div>
                <h4>Improve your Fitness, Improve your Life</h4>
            </div>

            {/* <div className="nav-design-right"> */}
            <p className="nav-design-right">Created by Chaiwat Pandey</p>
            {/* </div> */}
        </nav>
    )
}

export default Navbar;