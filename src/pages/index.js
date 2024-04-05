import React, { useState } from 'react'
import logo from '../images/Vector (2).png'
import icon from '../images/play.png'
import img1 from '../images/Ellipse 267.png'
import img2 from '../images/Ellipse 267-1.png'
import img3 from '../images/Ellipse 267-2.png'
import stock from '../images/Screenshot from 2024-04-04 11-03-39.png'
import slideOne from '../images/slide-1.png'
import slideTwo from '../images/Frame 626630-c.png'
import slideThree from '../images/Frame 626631-c.png'
import groove from '../images/groovehq.svg'
import groovey from '../images/Frame 626655.svg'
import jason from '../images/image 6.svg'
import next from '../images/Vector.png'
import prev from '../images/Vector-1.png'
import one from '../images/1.svg'
import two from '../images/2.svg'
import three from '../images/3.svg'
import slideBtn from '../images/Frame 6266244.svg'
import devs from '../images/zwilt-tba-1-01 2.gif'
import btnLogo from '../images/Vector-1.svg'
import iconOne from '../images/Vector-2.svg'
import iconTwo from '../images/Vector-3.svg'
import iconThree from '../images/Vector-4.svg'
import shopify from '../images/shopify.png'
import mag from '../images/magneto.png'
import ds from '../images/ds.png'
import webflow from '../images/webflow.png'
import net from '../images/net.png'
import ps from '../images/ps.png'
import figma from '../images/figma.png'
import adoIl from '../images/adoil.png'
import unreal from '../images/unreal.png'
import cinema from '../images/cinema.png'
import listIcon from "../images/Rectangle 3281.png"

const Home = () => {
  const [searchCat, setSearchCat] = useState(true);
  const [interview1, setInterview1] = useState(false);
  const [interview2, setInterview2] = useState(false);
  const [interview3, setInterview3] = useState(false);
  const [interview4, setInterview4] = useState(false);
  const [interview5, setInterview5] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>
            Finding the right fit
            <span><img src={devs} alt="" /></span>
            has
            never been easier
          </h1>
          <p>
            With our rigorous pre-vetting process,
            you'll never have to worry about finding
            the ideal candidate ever again.
          </p>
        </div>

        <div className="search-box">
          <input type="text" placeholder="design" />
          <button type="submit">
            <img src={btnLogo} alt="logo" />
          </button>
        </div>
        <div className="job-category">
          <div className="category-title">
            <h4 onClick={() => {
              setSearchCat(!searchCat)
            }}
              style={searchCat ? { backgroundColor: "#c9efc4" } : { backgroundColor: "#f2f2f2" }}
            >
              IT & Development
            </h4>
            <h4 onClick={() => {
              setSearchCat(!searchCat)
            }}
              style={!searchCat ? { backgroundColor: "#c9efc4" } : { backgroundColor: "#f2f2f2" }}
            >
              Design & Creative
            </h4>
          </div>
          <div className="category-items">
            <ul>
              <li>Python Developer</li>
              <li>Shopify Developer</li>
              <li>MERN Stack Developer</li>
              <li>Full Stack Developer</li>
            </ul>
            <ul>
              <li>Data Scientist</li>
              <li>Front End Developer</li>
              <li>Shopify Developer</li>
              <li>Python Developer</li>
            </ul>
            <ul>
              <li>Shopify Developer</li>
              <li>Python Developer</li>
              <li>Full Stack Developer</li>
              <li>Explore More</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bars">
        <div className="lines"></div>
        <div className="lines xl"></div>
        <div className="lines lg"></div>
        <div className="lines md"></div>
        <div className="lines sm"></div>
      </section>

      <section className="section-2">
        <div className="welcome">
          <h1>
            Your one-stop marketplace for finding
          </h1>
          <h1>
            the talent your
            business needs.
          </h1>
          <div className="job-types">
            <div className="row">
              <div className="job-type__text">
                <p>
                  Find dev and IT professionals to scale your
                  business.
                </p>
                <div className="job-type__tags">
                  <div className="tags-wrapper">
                    <div className="tags-icon">
                      <img
                        src={iconOne}
                        alt=""
                      />
                    </div>
                    <div className="tags-text">989 skills</div>
                  </div>
                  <div className="tags-wrapper">
                    <div className="tags-icon">
                      <img
                        src={iconTwo}
                        alt=""
                      />
                    </div>
                    <div className="tags-text">45 Sub-Categories</div>
                  </div>
                </div>
              </div>
              <div className="job-type__img">
                <h3>It & Development</h3>
                <div className="job-type__img-wrapper">
                  <div className="semi-wrapper">
                    <div className="job-type__img-icons">
                      <img
                        src={shopify}
                        alt=""
                      />
                    </div>
                    <div className="job-type__img-titles">
                      <span>Shopify developer</span>
                    </div>
                  </div>
                  <div className="semi-wrapper">
                    <div className="job-type__img-icons">
                      <img
                        src={mag}
                        alt=""
                      />
                    </div>
                    <div className="job-type__img-titles">
                      <span>Magneto Developer</span>
                    </div>
                  </div>
                  <div className="semi-wrapper">
                    <div className="job-type__img-icons">
                      <img
                        src={ds}
                        alt=""
                      />
                    </div>
                    <div className="job-type__img-titles">
                      <span>Data Scientist</span>
                    </div>
                  </div>
                  <div className="semi-wrapper">
                    <div className="job-type__img-icons">
                      <img
                        src={webflow}
                        alt=""
                      />
                    </div>
                    <div className="job-type__img-titles">
                      <span>Webflow Developer</span>
                    </div>
                  </div>
                  <div className="semi-wrapper">
                    <div className="job-type__img-icons">
                      <img
                        src={net}
                        alt=""
                      />
                    </div>
                    <div className="job-type__img-titles">
                      <span>Dot Net Developer</span>
                    </div>
                  </div>
                  <div className="semi-wrapper">
                    <div className="job-type__img-icons">
                      <img
                        src={btnLogo}
                        alt=""
                      />
                    </div>
                    <div className="job-type__img-titles">
                      <span style={{ color: "white" }}>Shopify developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="job-type__text">
                <h4>
                  Find dev and IT professionals to scale your
                  business
                </h4>
                <div className="job-type__tags">
                  <div className="tags-wrapper">
                    <div className="tags-icon">
                      <img
                        src={iconOne}
                        alt=""
                      />
                    </div>
                    <div className="tags-text">989 skills</div>
                  </div>
                  <div className="tags-wrapper">
                    <div className="tags-icon">
                      <img
                        src={iconTwo}
                        alt=""
                      />
                    </div>
                    <div className="tags-text">45 Sub-Categories</div>
                  </div>
                </div>
                <div className="tags-wrapper">
                  <div className="tags-icon">
                    <img src={iconThree} alt="" />
                  </div>
                  <div className="tags-text">1011 Profiles</div>
                </div>
              </div>
              <div className="job-type__img">
                <h3>It & Development</h3>
                <div className="job-type__img-wrapper">
                  <div className="semi-wrapper">
                    <div className="job-type__img-icons">
                      <img
                        src={btnLogo}
                        alt=""
                      />
                    </div>
                    <div className="job-type__img-titles">
                      <span style={{ color: "white" }}>Shopify developer</span>
                    </div>
                  </div>
                  <div className="semi-wrapper">
                    <div className="job-type__img-icons">
                      <img
                        src={figma}
                        alt=""
                      />
                    </div>
                    <div className="job-type__img-titles">
                      <span>UX Designer</span>
                    </div>
                  </div>
                  <div className="semi-wrapper">
                    <div className="job-type__img-icons">
                      <img
                        src={ps}
                        alt=""
                      />
                    </div>
                    <div className="job-type__img-titles">
                      <span>Graphics Designer</span>
                    </div>
                  </div>
                  <div className="semi-wrapper">
                    <div className="job-type__img-icons">
                      <img
                        src={adoIl}
                        alt=""
                      />
                    </div>
                    <div className="job-type__img-titles">
                      <span>Illustration Artist</span>
                    </div>
                  </div>
                  <div className="semi-wrapper">
                    <div className="job-type__img-icons">
                      <img
                        src={unreal}
                        alt=""
                      />
                    </div>
                    <div className="job-type__img-titles">
                      <span>Unreal Engine</span>
                    </div>
                  </div>
                  <div className="semi-wrapper">
                    <div className="job-type__img-icons">
                      <img
                        src={cinema}
                        alt=""
                      />
                    </div>
                    <div className="job-type__img-titles">
                      <span>Cinema 4D</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-more">
            <div className="explore-left" style={{ margin: "-5rem 0 5rem 0" }}>
              <div className='rc-start'>
                <span>
                  <img src={slideBtn} alt="" /> Explore More
                </span>
              </div>
            </div>
            <div className="explore-right">
              <strong>30 more</strong> to explore
            </div>
          </div>
        </div>
      </section>

      <section className="section-3">
        <div className="section-3-wrapper">
          <div className="content-wrapper">
            <h1>
              How it worked for Jason
              <span className='jason'>
                <img src={jason} alt="" />
              </span>
              at
            </h1>
            <span className='groove'>
              <img src={groove} alt="" />
            </span>
            <p style={{ margin: "2rem 0" }}>
              Zwilt enabled us to deliver on time and
              they've been heavy hitters in our corner since.
            </p>
            <div className="select-btns">
              <span className=''>
                <img src={prev} alt="" />
              </span>
              <span className=''>
                <img src={next} alt="" />
              </span>
            </div>
          </div>
          <div className="content-wrapper" style={{ width: "49%" }}>
            <div className='row-container rc-flex-start'>
              <div className='company-image'>
                <img src={groovey} alt="" />
              </div>
              <div className='staff-details'>
                <h2>Jason Makki</h2>
                <p>Engineer at GROOVE</p>
                <p>San Francisco</p>
              </div>
            </div>
            <p style={{ width: "75%", margin: "3rem 0 0 0" }}>
              Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since.
              Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since.
              Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since.
            </p>
          </div>
        </div>
      </section>

      <section className="section-4">
        <div className="welcome-">
          <h1>How we ensure you are in good hands</h1>
          <p>
            With our comprehensive screening process,
            we hand-pick highly skilled candidates
            so you can onboard them in a matter of days.
          </p>

          <div className="section-4-steps">
            <div
              onClick={() => {
                setInterview1(!interview1)
              }}
              className="section-4-step"
            >
              <div className="step-item">
                <div className="step-icon" style={{ background: interview1 ? "#8ba4fd" : "gray" }}>
                  <img src={icon} alt="" style={{ background: interview1 ? "#8ba4fd" : "" }} />
                </div>
                <div className="step-title">
                  <b>Step 1:</b> Resume Screening
                </div>
              </div>
              <div
                style={{ display: interview1 ? "block" : "none" }}
                className="step-desc"
              >
                Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.
              </div>
            </div>
            <div
              onClick={() => {
                setInterview2(!interview2)
              }}
              className="section-4-step"
            >
              <div className="step-item">
                <div className="step-icon" style={{ background: interview2 ? "#8ba4fd" : "gray" }}>
                  <img src={icon} alt="" style={{ background: interview2 ? "#8ba4fd" : "" }} />
                </div>
                <div className="step-title">
                  <b>Step 2: </b> Video Interview
                </div>
              </div>
              <div
                style={{ display: interview2 ? "block" : "none" }}
                className="step-desc"
              >
                Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.
              </div>
            </div>
            <div
              onClick={() => {
                setInterview3(!interview3)
              }}
              className="section-4-step"
            >
              <div className="step-item">
                <div className="step-icon">
                  <img src={icon} alt="" />
                </div>
                <div className="step-title">
                  <b>Step 3:</b> Technical Evaluation
                </div>
              </div>
              <div
                style={{ display: interview3 ? "block" : "none" }}
                className="step-desc"
              >
                Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.
              </div>
            </div>
            <div
              onClick={() => {
                setInterview4(!interview4)
              }}
              className="section-4-step"
            >
              <div className="step-item">
                <div className="step-icon">
                  <img src={icon} alt="" />
                </div>
                <div className="step-title">
                  <b>Step 4:</b> Application Review
                </div>
              </div>
              <div
                style={{ display: interview4 ? "block" : "none" }}
                className="step-desc"
              >
                Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.
              </div>
            </div>
            <div
              onClick={() => {
                setInterview5(!interview5)
              }}
              className="section-4-step"
            >
              <div className="step-item">
                <div className="step-icon">
                  <img src={icon} alt="" />
                </div>
                <div className="step-title">
                  <b>Step 5:</b> Lets get to work
                </div>
              </div>
              <div
                style={{ display: interview5 ? "block" : "none" }}
                className="step-desc"
              >
                Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.
              </div>
            </div>
          </div>
        </div>
        <div className="section-4-image">
          <img src={stock} alt="" />
        </div>
      </section>

      <h1 className='sec-title'>
        Start your journey today.
      </h1>
      <section className="section-5">
        <div className="text">
          <div className='number'>
            <img src={one} alt="" />
          </div>
          <div className='text-style'>
            <h2>
              Find your next star performer.
            </h2>
            <p>
              Explore the vast Zwilt marketplace to find the candidate that meets your needs.
            </p>
            <span><img src={slideBtn} alt="" /> Join Now</span>
          </div>
        </div>
        <div className="objects-1">

        </div>
      </section>

      <section className="section-5 orange">
        <div className="text">
          <div className='number'>
            <img src={two} alt="" />
          </div>
          <div className='text-style'>
            <h2>
              Evaluate to your heart’s content.
            </h2>
            <p>
              Assess the candidate through work history, transparent tests and video interviews.
            </p>
            <span><img src={slideBtn} alt="" /> Join Now</span>
          </div>
        </div>
        <div className="objects-2">

        </div>
      </section>

      <section className="section-5 ashy">
        <div className="text">
          <div className='number'>
            <img src={three} alt="" />
          </div>
          <div className='text-style'>
            <h2>
              Start building your team.
            </h2>
            <p>
              Onboard your candidate right away and start creating the next big thing.
            </p>
            <div className='rc-start'>
              <span>
                <img src={slideBtn} alt="" /> Join Now
              </span>
            </div>
          </div>
        </div>
        <div className="objects-3">
        </div>
      </section>

      <section class="scroll-section">
        <div class="scroll-container">
          <div class="scroll-left-column">
            <h1>Why choose Zwilt?</h1>
            <p>
              We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.
            </p>
          </div>
          <div class="scroll-right-column">
            <div class="scroll-right-column-wrapper">
              <div class="scroll-item">
                <div class="scroll-item-text">
                  <h1>Onboard without the risk.</h1>
                  <ul>
                    <p>
                      <img
                        src={listIcon}
                        alt=""
                      />
                      <span>
                        We pick the best for you to select
                      </span>
                    </p>
                    <p>
                      <img
                        src={listIcon}
                        alt=""
                      />
                      <span
                      >
                        Thousands of vetted candidates in dozens of categories.
                      </span>
                    </p>
                    <p>
                      <img
                        src={listIcon}
                        alt=""
                      />
                      <span
                      >
                        Risk-free resource swapping for the best fit.
                      </span>
                    </p>
                  </ul>
                  <div class="explore-left">
                    <div className='rc-start'>
                      <span>
                        <img src={slideBtn} alt="" /> Learn More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="scroll-item slide-bg-2">
                <div class="scroll-item-text">
                  <h1>An Open Book.</h1>
                  <ul>
                    <p>
                      <img
                        src={listIcon}
                        alt=""
                      />
                      <span
                      >Easy and transparent one-to-one chat with candidates.
                      </span>
                    </p>
                    <p>
                      <img
                        src={listIcon}
                        alt=""
                      />
                      <span
                      >
                        Simple and convenient payment methods.
                      </span>
                    </p>
                    <p>
                      <img
                        src={listIcon}
                        alt=""
                      />
                      <span
                      >
                        Review past ratings.</span>

                    </p>
                  </ul>
                  <div class="explore-left">
                    <div className='rc-start'>
                      <span>
                        <img src={slideBtn} alt="" /> Learn More
                      </span>
                    </div>

                  </div>
                </div>

              </div>
              <div class="scroll-item slide-bg-3">
                <div class="scroll-item-text">
                  <h1>Stay in the loop.</h1>
                  <ul>
                    <p>
                      <img
                        src={listIcon}
                        alt=""
                      />
                      <span>
                        Track your staff activity down to every minute with screenshots.
                      </span>
                    </p>
                    <p>
                      <img
                        src={listIcon}
                        alt=""
                      />
                      <span>
                        Comprehensive timesheet data to process payments.
                      </span>
                    </p>
                    <p>
                      <img
                        src={listIcon}
                        alt=""
                      />
                      <span>
                        Create projects to organize and assign tasks more effectively.
                      </span>
                    </p>
                  </ul>
                  <div class="explore-left">
                    <div className='rc-start'>
                      <span>
                        <img src={slideBtn} alt="" /> Learn More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="faqs">
        <div class="faqs-title"><h1>Frequently asked questions</h1></div>
        <div class="faq-segment border-top">
          <div class="segment-title">General</div>
          <div class="empty-space left-border"></div>
          <div class="segment-question">
          I want to work part-time, is that possible
          </div>
        </div>
        <div class="faq-segment border-top">
          <div class="segment-title"></div>
          <div class="empty-space"></div>
          <div class="segment-question">
          How long are the average projects?
          </div>
        </div>
        <div class="faq-segment gray">
          <div class="segment-title"></div>
          <div class="empty-space"></div>
          <div class="segment-question">
          How does the payment works?
          </div>
        </div>
        <div class="faq-segment">
          <div class="segment-title"></div>
          <div class="empty-space"></div>
          <div class="segment-question">How much can I earn?</div>
        </div>
        <div class="faq-segment border-top">
          <div class="segment-title gray">General</div>
          <div class="empty-space"><strong>Join Process</strong></div>
          <div class="segment-question">I want to work part-time, is that possible</div>
        </div>
        <div class="faq-segment border-top">
          <div class="segment-title"></div>
          <div class="empty-space"><strong></strong></div>
          <div class="segment-question">How long are the average projects?</div>
        </div>
        <div class="faq-segment border-top">
          <div class="segment-title"></div>
          <div class="empty-space"><strong></strong></div>
          <div class="segment-question">How long are the average projects?</div>
        </div>
        <div class="faq-segment border-top">
          <div class="segment-title"></div>
          <div class="empty-space"><strong></strong></div>
          <div class="segment-question">How much can I earn?</div>
        </div>
      </section>
    </>
  )
}

export default Home