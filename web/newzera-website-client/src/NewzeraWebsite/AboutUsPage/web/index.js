// @flow

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'

import './AboutUsPageWeb.css'

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

function AboutUsPageWeb() {
  const [visibleSection, setVisibleSection] = useState()
  const [show, changeShow] = useState(false)
  const headerRef = React.useRef(null)
  const MissionRef = React.useRef(null)
  const VisionRef = React.useRef(null)
  const PhilosophyRef = React.useRef(null)
  const ValuesRef = React.useRef(null)

  const showModal = () => {
    changeShow(true)
  }

  const hideModal = () => {
    changeShow(false)
  }

  const sectionRefs = [
    { section: 'Mission', ref: MissionRef },
    { section: 'Vision', ref: VisionRef },
    { section: 'Philosophy', ref: PhilosophyRef },
    { section: 'Values', ref: ValuesRef }
  ]
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

          return null
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
    // eslint-disable-next-line
  }, [visibleSection])
  return (
    <div>
      <Modal show={show} handleClose={hideModal} />
      <div className="flex-2-1">
        <div className="flex-2-1-1">
          <div>
            <img className="newzera-img" src="assests/Newzerawhite2x.jpg" alt="" />
          </div>
          <div className="heading">About Us</div>
          <div className="paragraphs">
            <p>
              <span className="space">Newzera</span> is born under the dream of Make in India 2.0.
              For a long time now, our markets had been swamped by Chinese products. But now, for
              the first time, there will be a revolutionary product incepted and incubated in India.
              It will stand tall in the same league as the technical giants like Facebook, Google,
              Twitter and Instagram with an India-first target market, acting as a catalyst in
              strengthening information literacy in India. Newzera will be a breakthrough product on
              an unexplored concept at the world-level.
            </p>
            <p style={{ paddingTop: '3.95vh' }}>
              <span className="space">Our</span> creative solution will reinvent the news space and
              transform the way social networking is perceived. It will be implemented with the
              application of advanced Artificial Intelligence technologies and Machine learning
              algorithms by qualified top-level team. <br />
              With the provision of appropriate resources, Newzera will turn out to be the big
              game-changer and a first-of-its-kind product for the world that’s developed in India.
            </p>
          </div>
        </div>
        <div className="flex-2-1-2">
          <div className="nav-bar-2">
            <Link to="/#/">Home</Link>{' '}
            <Link to="/about-us#/">
              <span className="selectLink">About</span>
            </Link>{' '}
            <a href="https://medium.com/@newzera">Blog</a> <Link to="/careers">Careers</Link>{' '}
            <span onClick={showModal} onKeyPress={showModal} role="presentation">
              <span style={{ cursor: 'pointer' }}>Contact</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex-2-3-1">
        <div>
          <div className="flex-2-2-1-1-head">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>
        <div className="flex-2-3-1-2">
          <div />
        </div>
      </div>
      <div className="flex-2-2-2">
        <div>
          <div className="flex-2-2-2-1">
            <div className="lists" ref={headerRef}>
              <div className={`header_link ${visibleSection === 'Mission' ? '' : 'flex-dot-web'}`}>
                <span
                  className={`header_link ${
                    visibleSection === 'Mission' ? 'dot-2-active' : 'dot-2'
                  }`}
                />
                <span
                  className={`header_link ${
                    visibleSection === 'Mission' ? 'selected-web' : 'selected-not-web'
                  }`}>
                  Mission
                </span>
              </div>
              <div className={`header_link ${visibleSection === 'Vision' ? '' : 'flex-dot-web'}`}>
                <span
                  className={`header_link ${
                    visibleSection === 'Vision' ? 'dot-2-active' : 'dot-2'
                  }`}
                />
                <span
                  className={`header_link ${
                    visibleSection === 'Vision' ? 'selected-web' : 'selected-not-web'
                  }`}>
                  Vision
                </span>
              </div>
              <div
                className={`header_link ${visibleSection === 'Philosophy' ? '' : 'flex-dot-web'}`}>
                <span
                  className={`header_link ${
                    visibleSection === 'Philosophy' ? 'dot-2-active' : 'dot-2'
                  }`}
                />
                <span
                  className={`header_link ${
                    visibleSection === 'Philosophy' ? 'selected-web' : 'selected-not-web'
                  }`}>
                  Philosophy
                </span>
              </div>
              <div className={`header_link ${visibleSection === 'Values' ? '' : 'flex-dot-web'}`}>
                <span
                  className={`header_link ${
                    visibleSection === 'Values' ? 'dot-2-active' : 'dot-2'
                  }`}
                />
                <span
                  className={`header_link ${
                    visibleSection === 'Values' ? 'selected-web' : 'selected-not-web'
                  }`}>
                  Values
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-2-2-2-2">
          <div className="lists-expanded" id="Mission" ref={MissionRef}>
            <div className="lists-expanded-heading">Mission</div>

            <div className="lists-expanded-content">
              We strive to inform, engage, entertain and inspire our audience by bringing creative
              tech projects to life. Our goal is to provide the highest level of services to the
              people around the world.
            </div>
            <hr style={{ marginTop: '5.8vh', color: '#8F8FAF', opacity: '0.5' }} />
          </div>
          <div className="lists-expanded" id="Vision" ref={VisionRef}>
            <div className="lists-expanded-heading">Vision</div>
            <div className="lists-expanded-content">
              “Turning ideas into reality” <br />
              Our Vision is to be the catalyst in the world of technology and improve people’s
              online experience through cutting edge technology. We foresee Newzera Tech Labs as an
              AI focused company which epitomizes trust and where everyone fits in.
            </div>
            <hr style={{ marginTop: '5.8vh', color: '#8F8FAF', opacity: '0.5' }} />
          </div>
          <div className="lists-expanded" id="Philosophy" ref={PhilosophyRef}>
            <div className="lists-expanded-heading">Philosophy</div>
            <div className="lists-expanded-content">
              The company’s philosophy is to be a market leader in each of its service segment.
              <p />
              This is to be achieved by:
              <div>
                <span className="dot-5" />
                <span style={{ paddingLeft: '1.31vw' }}>
                  Designing and developing our products by following the best standards and
                  practices.
                </span>
              </div>
              <div>
                <span className="dot-5" />
                <span style={{ paddingLeft: '1.31vw' }}>
                  Providing highest-level of services with a customer-oriented perspective.
                </span>
              </div>
              <div>
                <span className="dot-5" />
                <span style={{ paddingLeft: '1.31vw' }}>
                  Striving to provide the best quality by attending to the finest details.
                </span>
              </div>
              <div>
                <span className="dot-5" />
                <span style={{ paddingLeft: '1.31vw' }}>
                  Possessing the desire for continuous learning and improvement.
                </span>
              </div>
              <div>
                <span className="dot-5" />
                <span style={{ paddingLeft: '1.31vw' }}>
                  Creating and maintaining a healthy and positive environment and nurturing
                  relationships with customers and employees.
                </span>
              </div>
            </div>
            <hr style={{ marginTop: '5.8vh', color: '#8F8FAF', opacity: '0.5' }} />
          </div>
          <div className="lists-expanded" id="Values" ref={ValuesRef}>
            <div className="lists-expanded-heading">Values</div>
            <div className="lists-expanded-content">
              <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Accountability:</span> If it is to
              be, it's up to me.
              <br />
              <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Integrity:</span> Be Real, Be You.
              <br />
              <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Quality:</span> What we do, we do
              well.
              <br />
              <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Ownership:</span> Take charge and
              lead with pride. From taking responsibility, never hide.
              <br />
              <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Focus:</span> There’s truth.
              There’s truth veiled behind lies and there are lies. Know the difference. <br />
              <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Passion:</span> Give it all. Stay
              committed. <br />
              <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Innovate:</span> New is always
              better.Create, improvise, empower. Segregate, simplify and make it fun.
            </div>
            <hr style={{ marginTop: '5.8vh', color: '#8F8FAF', opacity: '0.5' }} />
          </div>
        </div>
      </div>

      <div className="flex-2-bottom">
        <div className="flex-2-3-1">
          <div>
            <div className="flex-2-3-1-1-head">
              The Founder
              <br /> Mr. Shrey Sharma
            </div>
          </div>
          <div className="flex-2-3-1-2">
            <div>
              Founder and CEO
              <br /> Newzera Tech Labs Pvt. Ltd
            </div>
          </div>
        </div>

        <div className="flex-2-3-2">
          <div>
            <div className="flex-2-3-2-1">
              <span className="space">A</span> dual degree holder (B.Tech+M.Tech) in Computer
              Science from IIT Kharagpur, Mr. Shrey Sharma specializes in Artificial Intelligence
              and Machine Learning. It is worth noting that AI engineers are extremely rare. His
              knack and passion for technology pulled him early as he went on to intern at several
              top-level companies in the world like EPFL, Switzerland and Yahoo, while at college.
              At Yahoo, he developed a News Recommendation System based on Twitter.
              <br /> After completing his education, he went abroad to gain the experience of
              working with world-class professionals and amplify his market knowledge. He has worked
              at leading tech company, Epic and later at a startup, Post Intelligence, where he
              designed and developed the world’s first social media AI robot, which got acquired by
              Amazon. Until recently, he was working at Pinterest, the renowned social network
              company. He has led several projects there and developed the next generation of
              related pins which powers 40% of the total user engagement with 175 million weekly
              active users.
            </div>
          </div>
          <div className="flex-2-3-2-2">
            <div>
              <span className="space">During </span>his tenure, Pinterest went public and his
              application for green card was under process in the United States. However, things
              changed for him with the launch of Start-up India 2.0 initiative. Feeling the ebbing
              need of AI-based companies to be at the forefront of tech in India, made him
              determined to be a part of this digital revolution. Turning his back to the
              fascinating and lucrative opportunities he could have gotten there was not a big deal
              against his passion and zeal to work for his own country and be a contributor to its
              development.
              <br /> It was enough to bring him back.
              <br /> With a glaring experience of over seven years behind, Mr. Sharma now plans to
              utilize his experience to build innovative, world-level products incepted and
              conceptualized in our country.
            </div>
          </div>
        </div>
        <div className="flex-2-3-3">
          <div>
            <div className="flex-2-3-3-1" />
          </div>
          <div className="flex-2-3-3-2">
            <div>
              <div className="flex-2-3-3-2-head">The Team</div>
              <div style={{ paddingTop: '9.87vh' }}>
                <span className="space">Newzera </span>Tech Labs comprises of cross functional teams
                with the goal of making innovative technology software products from scratch. We
                plan to employ around 100 technologically skilled workers by bringing India’s
                brightest minds to work with us and collaborating with the best talent around the
                world. Their job roles will comprise of UI/UX designing, front end development, back
                end development, machine learning, artificial intelligence, content editing,
                business development and human resources.
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '0 4.09vw 0 4.09vw' }}>
          <span style={{ opacity: '0' }}>
            <hr />
          </span>
          <br />
          <div className="flex-2-footer">
            <div className="nav-bar-footer">
              <Link to="/about-us#/">About</Link> <Link to="/job-description#/">Blog</Link>{' '}
              <span onClick={showModal} onKeyPress={showModal} role="presentation">
                <span style={{ cursor: 'pointer' }}>Contact</span>
              </span>{' '}
              <Link to="/careers#/">Careers</Link> <Link to="/help-centre#/">Help</Link>{' '}
            </div>
            <div>© 2020 Newzera Newzera Tech Labs Pvt. Ltd. All Rights Reserved.</div>
            <div style={{ textAlign: 'right' }}>
              <span className="icon-space">
                {/* <a href="#" alt=""> */}
                <img src="assests/facebook-white-1.jpg" alt="df" />
                {/* </a> */}
              </span>
              <span className="icon-space">
                {/* <a href="#" alt=""> */}
                <img src="assests/instagram-white-1.jpg" alt="df" />
                {/* </a> */}
              </span>
              <span className="icon-space">
                {/* <a href="#" alt=""> */}
                <img src="assests/linkedin-white-1.jpg" alt="df" />
                {/* </a> */}
              </span>
              <span>
                {/* <a href="#" alt=""> */}
                <img src="assests/twitter-white-1.jpg" alt="df" />
                {/* </a> */}
              </span>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div style={{ padding: '16.41vh 26.94vw 16.91vh 27.22vw' }}>
          <div className="specifications">
            <div
              className="cross"
              onClick={handleClose}
              onKeyPress={handleClose}
              role="presentation">
              <img style={{ height: '1.5vh', cursor: 'pointer' }} src="assests/close.jpg" alt="" />
            </div>
            <div className="contact">Contact</div>
            <div className="stay-up">Stay updated! Get our newslleter to know what’s news!</div>
            <div className="inputs">
              <div className="input-text">
                <span className="name">Name</span>
                <input
                  className="placeholder-class"
                  type="text"
                  placeholder="Insert your name here"
                />
              </div>
              <div style={{ paddingTop: '2.4vh' }}>
                <div className="input-text">
                  <span className="name">E-mail</span>
                  <span>
                    <input
                      className="placeholder-class"
                      type="text"
                      placeholder="Insert your e-mail here"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="submit-button">
              <button className="submit-button-6" type="button">
                Submit
              </button>
            </div>
            <div className="footer-6">
              <div className="footer-6-content">Need more info? info@newzera.com</div>
              <div className="footer-icons">
                <span style={{ paddingRight: '2.08vw' }}>
                  {/* <a href="#" alt=""> */}
                  <img src="assests/facebook-color-1.jpg" alt="" />
                  {/* </a> */}
                </span>
                <span style={{ paddingRight: '2.5vw' }}>
                  {/* <a href="#" alt=""> */}
                  <img src="assests/instagram-color-1.jpg" alt="" />
                  {/* </a> */}
                </span>
                <span style={{ paddingRight: '2.15vw' }}>
                  {/* <a href="#" alt=""> */}
                  <img src="assests/linkedin-color-1.jpg" alt="" />
                  {/* </a> */}
                </span>
                <span>
                  {/* <a href="#" alt=""> */}
                  <img src="assests/twitter-color-1.jpg" alt="" />
                  {/* </a> */}
                </span>
              </div>
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

export default AboutUsPageWeb
