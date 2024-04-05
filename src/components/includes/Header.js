import React from 'react'
import logo from '../../images/Vector (2).png'
import zwilt from '../../images/Group 625175.png'

const Header = () => {
    return (
        <section className="header">
            <div className="logo">
                <div className="logo-img">
                    <img src={zwilt} alt="" />
                </div>
                <div className="logo-img">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="menu-list">
                <ul>
                    <li>Find Work</li>
                    <li>Find Talent</li>
                    <li>Articles</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="auth">
                <div className="login">Login</div>
                <div className="sign-up">Join Now</div>
            </div>
        </section>
    )
}

export default Header