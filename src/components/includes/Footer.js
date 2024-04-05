import React from 'react'
import text_logo from '../../images/zwilt.png'
import logo_img from '../../images/Vector (2).png'
import svg_img from '../../images/Frame 626624.svg'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer-box'>
                <h1>Need a job done, and done well? Get started</h1>
                <img src={svg_img} alt="React Logo" />
            </div>
            <div className='footer-text'>
                <div className="footer-col">
                    <div className="logo-container">
                        <img src={text_logo} alt="" srcset="" />
                        <img src={logo_img} alt="" srcset="" />
                    </div>
                    <div className="logo-text">
                        <p>
                        We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.
                        </p>
                    </div>
                </div>
                <div className="footer-col-2">
                    <h1 style={{fontSize: "2.5rem"}}>Connecting the right people to the right businesses.</h1>
                </div>
            </div>
            <div className='footer-links'>
                <div className="footer-col-3 xg">
                    <span className='footer-txt-title'>
                        links and redirects
                    </span>
                    <div className="footer-btns">
                        <button>Hire now</button>
                        <button>Apply now</button>
                    </div>
                </div>
                <div className="footer-col-3">
                    <span className='footer-txt-title'>
                        platform
                    </span>
                    <p>find work</p>
                    <p>find talent</p>
                    <p>articles</p>
                    <p>about us</p>
                </div>
                <div className="footer-col-3">
                    <span className='footer-txt-title'>
                        categories
                    </span>
                    <p>data &amp; science</p>
                    <p>it &amp; networking</p>
                    <p>web &amp; mobile</p>
                </div>
                <div className="footer-col-3">
                    <span className='footer-txt-title'>

                        help
                    </span>
                    <p>contact us</p>
                </div>
                <div className="footer-col-3">
                    <span className='footer-txt-title'>
                        get in touch
                    </span>
                    <p>instagram</p>
                    <p>linkedin</p>
                    <p>twitter</p>
                </div>
            </div>
            <hr />

        </section>
    )
}

export default Footer