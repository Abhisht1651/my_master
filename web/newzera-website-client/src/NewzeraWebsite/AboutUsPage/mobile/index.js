// @flow

import React, { useRef, useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import PropTypes from 'prop-types'

import './AboutUsPageMob.css'

// import '../../Fonts/BananaGrotesk-Medium.otf'
// import '../../Fonts/BananaGrotesk-Light.otf'
// import '../../Fonts/BananaGrotesk-Semibold.otf'
// import '../../Fonts/BananaGrotesk-Bold.otf'

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect()
  const { offsetTop } = ele
  const offsetBottom = offsetTop + height

  return {
    height,
    offsetTop,
    offsetBottom
  }
}

function AboutUsPageMob() {
  const [visibleSection, setVisibleSection] = useState()
  const [side, setSide] = useState(false)
  const [contact, setContact] = useState(false)
  const headerRef = useRef(null)
  const missionRef = useRef(null)
  const visionRef = useRef(null)
  const philosophyRef = useRef(null)
  const valuesRef = useRef(null)

  const sectionRefs = [
    { section: 'Mission', ref: missionRef },
    { section: 'Vision', ref: visionRef },
    { section: 'Philosophy', ref: philosophyRef },
    { section: 'Values', ref: valuesRef }
  ]

  const showSidebar = () => {
    setSide(true)
  }
  const hideSidebar = () => {
    setSide(false)
  }
  const showContact = () => {
    setContact(true)
  }
  const hideContact = () => {
    setContact(false)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const { height: headerHeight } = getDimensions(headerRef.current)
        const scrollPosition = window.scrollY + headerHeight

        const selected = sectionRefs.find(({ ref }) => {
          const ele = ref.current
          if (ele) {
            const { offsetBottom, offsetTop } = getDimensions(ele)
            return scrollPosition > offsetTop && scrollPosition < offsetBottom
          }
          return ele
        })

        if (selected && selected.section !== visibleSection) {
          setVisibleSection(selected.section)
        } else if (!selected && visibleSection) {
          setVisibleSection(undefined)
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleSection])

  return (
    <div>
      <Modal show={contact} handleClose={hideContact} />
      <div className="background2-2-mob">
        <div className="header-1-mob">
          <div>
            <img className="newzera-img-mob" src="assests/newzera-white-mob2x.jpg" alt="" />
          </div>
          <div>
            <Sidebar side={side} sidebarClose={hideSidebar} />
            <span onClick={showSidebar} onKeyPress={showSidebar} role="presentation">
              <img className="icon-menu-mob" src="assests/icon-menu2x.jpg" alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className="para-2-1-mob">
        <div className="para-2-1-1-mob">About Us</div>
        <div className="para-2-1-2-mob">
          <span className="space-mob">Newzera</span> is born under the dream of Make in India 2.0.
          <br /> For a long time now, our markets had been swamped by Chinese products. But now, for
          the first time, there will be a revolutionary product incepted and incubated in India. It
          will stand tall in the same league as the technical giants like Facebook, Google, Twitter
          and Instagram with an India-first target market, acting as a catalyst in strengthening
          information literacy in India. Newzera will be a breakthrough product on an unexplored
          concept at the world-level.
        </div>
        <div className="para-2-1-3-mob">
          <span className="space-mob">Our</span> creative solution will reinvent the news space and
          transform the way social networking is perceived. It will be implemented with the
          application of advanced Artificial Intelligence technologies and Machine learning
          algorithms by qualified top-level team.
          <br />
          With the provision of appropriate resources, Newzera will turn out to be the big
          game-changer and a first-of-its-kind product for the world that’s developed in India.
        </div>
      </div>
      <div className="para-2-2-mob">
        <div className="para-2-2-1-mob">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        <div className="para-2-2-2-mob">
          <div className="flex-2-1-mob">
            <div
              className="box-mob"
              style={{ padding: '2.83vh 1.2vw 2.83vh 3.33vw' }}
              ref={headerRef}>
              <div className="flex-dot-mob">
                <div style={{ width: '2vw' }}>
                  <div
                    className={`header_link ${
                      visibleSection === 'Mission' ? '' : 'selected-dot-mob'
                    }`}>
                    <span
                      className={`header_link ${
                        visibleSection === 'Mission' ? 'dot-2-active-mob' : 'dot-2-head-mob'
                      }`}
                    />
                  </div>
                </div>
                <div style={{ paddingLeft: '3vw' }}>
                  <span
                    className={`header_link ${visibleSection === 'Mission' ? 'selected-mob' : ''}`}>
                    Mission
                  </span>
                </div>
              </div>
              <div className="flex-dot-mob">
                <div style={{ width: '2vw' }}>
                  <div
                    className={`header_link ${
                      visibleSection === 'Vision' ? '' : 'selected-dot-mob'
                    }`}>
                    <span
                      className={`header_link ${
                        visibleSection === 'Vision' ? 'dot-2-active-mob' : 'dot-2-head-mob'
                      }`}
                    />
                  </div>
                </div>
                <div style={{ paddingLeft: '3vw' }}>
                  <span
                    className={`header_link ${visibleSection === 'Vision' ? 'selected-mob' : ''}`}>
                    Vision
                  </span>
                </div>
              </div>
              <div className="flex-dot-mob">
                <div style={{ width: '2vw' }}>
                  <div
                    className={`header_link ${
                      visibleSection === 'Philosophy' ? '' : 'selected-dot-mob'
                    }`}>
                    <span
                      className={`header_link ${
                        visibleSection === 'Philosophy' ? 'dot-2-active-mob' : 'dot-2-head-mob'
                      }`}
                    />
                  </div>
                </div>
                <div style={{ paddingLeft: '3vw' }}>
                  <span
                    className={`header_link ${
                      visibleSection === 'Philosophy' ? 'selected-mob' : ''
                    }`}>
                    Philosophy
                  </span>
                </div>
              </div>
              <div className="flex-dot-mob">
                <div style={{ width: '2vw' }}>
                  <div
                    className={`header_link ${
                      visibleSection === 'Values' ? '' : 'selected-dot-mob'
                    }`}>
                    <span
                      className={`header_link ${
                        visibleSection === 'Values' ? 'dot-2-active-mob' : 'dot-2-head-mob'
                      }`}
                    />
                  </div>
                </div>
                <div style={{ paddingLeft: '3vw' }}>
                  <span
                    className={`header_link ${visibleSection === 'Values' ? 'selected-mob' : ''}`}>
                    Values
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-2-2-mob">
            <div className="section" id="Mission" ref={missionRef}>
              <div className="head-2-1-mob">Mission</div>
              <div className="cont-2-1-mob">
                We strive to inform, engage, entertain and inspire our audience by bringing creative
                tech projects to life. Our goal is to provide the highest level of services to the
                people around the world.
              </div>
              <div style={{ paddingTop: '4.4vh' }}>
                <hr className="hr-mob" />
              </div>
            </div>
            <div className="section" id="Vision" ref={visionRef}>
              <div style={{ paddingTop: '8.13vh' }}>
                <div className="head-2-1-mob">Vision</div>
                <div className="cont-2-1-mob">
                  “Turning ideas into reality” Our Vision is to be the catalyst in the world of
                  technology and improve people’s online experience through cutting edge technology.
                  We foresee Newzera Tech Labs as an AI focused company which epitomizes trust and
                  where everyone fits in.
                </div>
                <div style={{ paddingTop: '4.4vh' }}>
                  <hr className="hr-mob" />
                </div>
              </div>
            </div>
            <div className="section" id="Philosophy" ref={philosophyRef}>
              <div style={{ paddingTop: '8.62vh' }}>
                <div className="head-2-1-mob">Philosophy</div>
                <div className="cont-2-1-mob">
                  The company’s philosophy is to be a market leader in each of its service segment.
                  <p />
                  This is to be achieved by:
                  <div>
                    <span className="dot-2-mob" />
                    <span style={{ paddingLeft: '1.31vw' }}>
                      Designing and developing our products by following the best standards and
                      practices.
                    </span>
                  </div>
                  <div>
                    <span className="dot-2-mob" />
                    <span style={{ paddingLeft: '1.31vw' }}>
                      Providing highest-level of services with a customer-oriented perspective.
                    </span>
                  </div>
                  <div>
                    <span className="dot-2-mob" />
                    <span style={{ paddingLeft: '1.31vw' }}>
                      Striving to provide the best quality by attending to the finest details.
                    </span>
                  </div>
                  <div>
                    <span className="dot-2-mob" />
                    <span style={{ paddingLeft: '1.31vw' }}>
                      Possessing the desire for continuous learning and improvement.
                    </span>
                  </div>
                  <div>
                    <span className="dot-2-mob" />
                    <span style={{ paddingLeft: '1.31vw' }}>
                      Creating and maintaining a healthy and positive environment and nurturing
                      relationships with customers and employees.
                    </span>
                  </div>
                </div>
                <div style={{ paddingTop: '4.4vh' }}>
                  <hr className="hr-mob" />
                </div>
              </div>
            </div>
            <div className="section" id="Values" ref={valuesRef}>
              <div style={{ paddingTop: '8.62vh', paddingBottom: '8.74vh' }}>
                <div className="head-2-1-mob">Values</div>
                <div className="cont-2-1-mob">
                  <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Accountability:</span> If it is
                  to be, it's up to me.
                  <br />
                  <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Integrity:</span> Be Real, Be
                  You.
                  <br />
                  <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Quality:</span> What we do, we
                  do well.
                  <br />
                  <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Ownership:</span> Take charge
                  and lead with pride. From taking responsibility, never hide.
                  <br />
                  <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Focus:</span> There’s truth.
                  There’s truth veiled behind lies and there are lies. Know the difference. <br />
                  <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Passion:</span> Give it all.
                  Stay committed. <br />
                  <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Innovate:</span> New is always
                  better.Create, improvise, empower. Segregate, simplify and make it fun.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="para-2-3-mob">
        <div className="para-2-3-1-mob">
          The Founder <br />
          Mr. Shrey Sharma
        </div>
        <div className="para-2-3-2-mob">
          Founder and CEO
          <br /> Newzera Tech Labs Pvt. Ltd
        </div>
        <div className="para-2-3-3-mob">
          <span className="space-mob">A</span> dual degree holder (B.Tech+M.Tech) in Computer
          Science from IIT Kharagpur, Mr. Shrey Sharma specializes in Artificial Intelligence and
          Machine Learning. It is worth noting that AI engineers are extremely rare.
          <br /> His knack and passion for technology pulled him early as he went on to intern at
          several top-level companies in the world like EPFL, Switzerland and Yahoo, while at
          college. At Yahoo, he developed a News Recommendation System based on Twitter. After
          completing his education, he went abroad to gain the experience of working with
          world-class professionals and amplify his market knowledge. He has worked at leading tech
          company, Epic and later at a startup, Post Intelligence, where he designed and developed
          the world’s first social media AI robot, which got acquired by Amazon. Until recently, he
          was working at Pinterest, the renowned social network company. He has led several projects
          there and developed the next generation of related pins which powers 40% of the total user
          engagement with 175 million weekly active users.
          <div style={{ paddingTop: '6.03vh' }}>
            <span className="space-mob">During</span> his tenure, Pinterest went public and his
            application for green card was under process in the United States. However, things
            changed for him with the launch of Start-up India 2.0 initiative. Feeling the ebbing
            need of AI-based companies to be at the forefront of tech in India, made him determined
            to be a part of this digital revolution. Turning his back to the fascinating and
            lucrative opportunities he could have gotten there was not a big deal against his
            passion and zeal to work for his own country and be a contributor to its development. It
            was enough to bring him back. With a glaring experience of over seven years behind, Mr.
            Sharma now plans to utilize his experience to build innovative, world-level products
            incepted and conceptualized in our country.
          </div>
        </div>
        <div className="para-2-3-4-mob">The Team</div>
        <div className="para-2-3-5-mob">
          <span className="space-mob">Newzera</span>Tech Labs comprises of cross functional teams
          with the goal of making innovative technology software products from scratch. We plan to
          employ around 100 technologically skilled workers by bringing India’s brightest minds to
          work with us and collaborating with the best talent around the world. Their job roles will
          comprise of UI/UX designing, front end development, back end development, machine
          learning, artificial intelligence, content editing, business development and human
          resources.
        </div>
        <hr />
        <div className="footer-mob">
          <div className="footer-tag-mob">
            <div>
              <Link to="/about-us#/">About</Link>
            </div>
            <div>
              <Link to="/job-description#/">Blog</Link>
            </div>
            <div>
              <Link to="/careers#/">Careers</Link>
            </div>
            <div onClick={showContact} onKeyPress={showContact} role="presentation">
              Contact
            </div>
            <div>
              <Link to="/help-centre#/">Help</Link>
            </div>
          </div>
          <div className="footer-icons-mob">
            <span>
              {/* <a href="#" alt=""> */}
              <img className="icons-img-mob" src="assests/facebook-white-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span className="icon-space-mob">
              {/* <a href="#" alt=""> */}
              <img className="icons-img-mob" src="assests/instagram-white-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span className="icon-space-mob">
              {/* <a href="#" alt=""> */}
              <img className="icons-img-mob" src="assests/linkedin-white-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span className="icon-space-mob">
              {/* <a href="#" alt=""> */}
              <img className="icons-img-mob" src="assests/twitter-white-1.jpg" alt="df" />
              {/* </a> */}
            </span>
          </div>
          <div className="footer-copyright-mob">
            © 2020 Newzera Newzera Tech Labs Pvt. Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="specifications-6-mob">
          <div className="box-6-mob">
            <div
              className="cross-mob"
              onClick={handleClose}
              onKeyPress={handleClose}
              role="presentation">
              <img style={{ height: '2vh', cursor: 'pointer' }} src="assests/close.jpg" alt="" />
            </div>
            <div className="para-6-1-mob">Contact</div>
            <div className="para-6-2-mob">
              Stay updated! <br />
              Get our newslleter to know what’s news!
            </div>
            <div className="para-6-3-mob">
              <input className="placeholder-class-mob" type="text" placeholder="Full Name" />
              <hr style={{ color: 'http://www.newzera.com/DCDCE9', opacity: '1' }} />
              <div style={{ paddingTop: '4.06vh' }}>
                <input className="placeholder-class-mob" type="text" placeholder="Email" />
                <hr style={{ color: 'http://www.newzera.com/DCDCE9', opacity: '1' }} />
              </div>
            </div>
            <div className="para-6-4-mob">
              <button type="button" className="submit-6-mob">
                Submit
              </button>
            </div>
            <div className="para-6-5-mob">Need more info? info@newzera.com</div>
            <div className="footer-icons-6-mob">
              <span>
                {/* <a href="#" alt=""> */}
                <img className="icons-img-mob" src="assests/facebook-color-1.jpg" alt="df" />
                {/* </a> */}
              </span>
              <span className="icon-space-mob">
                {/* <a href="#" alt=""> */}
                <img className="icons-img-mob" src="assests/instagram-color-1.jpg" alt="df" />
                {/* </a> */}
              </span>
              <span className="icon-space-mob">
                {/* <a href="#" alt=""> */}
                <img className="icons-img-mob" src="assests/linkedin-color-1.jpg" alt="df" />
                {/* </a> */}
              </span>
              <span className="icon-space-mob">
                {/* <a href="#" alt=""> */}
                <img className="icons-img-mob" src="assests/twitter-color-1.jpg" alt="df" />
                {/* </a> */}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Modal.defaultProps = {
  show: false,
  handleClose: ''
}

Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.string
}

const Sidebar = ({ sidebarClose, side }) => {
  const showHideClassName = side ? 'modal display-block' : 'modal display-none'
  const [show, changeShow] = useState(false)

  const showModal = () => {
    changeShow(true)
  }

  const hideModal = () => {
    changeShow(false)
  }

  return (
    <div className={showHideClassName}>
      <Modal show={show} handleClose={hideModal} />
      <section className="modal-main">
        <div className="sidebar-mob">
          <div
            className="cross-sidebar-mob"
            onClick={sidebarClose}
            onKeyPress={sidebarClose}
            role="presentation">
            <img style={{ height: '2vh', cursor: 'pointer' }} src="assests/close.jpg" alt="" />
          </div>
          <div className="icons-sidebar-mob">
            <Link to="/#/">Home</Link>
            <div style={{ paddingTop: '5vh' }} />
            <Link to="/about-us#/">
              <span className="selectLink">About</span>
            </Link>
            <div style={{ paddingTop: '5vh' }} />
            <a href="https://medium.com/@newzera">Blog</a>
            <div style={{ paddingTop: '5vh' }} />
            <Link to="/careers#/">Careers</Link>
            <div style={{ paddingTop: '5vh' }} />
            <span onClick={showModal} onKeyPress={showModal} role="presentation">
              <span style={{ cursor: 'pointer' }}>Contact</span>
            </span>
            <div style={{ paddingTop: '5vh' }} />
            <Link to="/help-centre#/">Help</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

Sidebar.defaultProps = {
  side: false,
  sidebarClose: false
}

Sidebar.propTypes = {
  side: PropTypes.bool,
  sidebarClose: PropTypes.string
}

export default AboutUsPageMob
