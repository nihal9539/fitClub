import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import bars from "../../assets/bars.png"
import { Link } from "react-scroll"
import { useState } from 'react'

const Header = () => {
     const mobile = window.innerWidth <= 712 ? true : false;
     const [menuOpended, setMenuOpened] = useState(false)
     return (
          <div className='header'>
               <img className='logo' src={Logo} alt="" />
               {menuOpended === false && mobile === true ?
                    (
                         <div style={{ backgroundColor: 'var(--appColor)', padding: "0.5rem", borderRadius: "5px" }}><img src={bars} alt=""
                              style={{ width: "1.5rem", height: "1.5rem" }}
                              onClick={() => setMenuOpened(true)}
                         /></div>
                    ) : (
                         <ul className='header-menu'>
                              <li >
                                   <Link
                                        to='header'
                                        activeClass='active'
                                        span={true}
                                        smooth={true}
                                        onClick={() => setMenuOpened(false)}
                                   >Home</Link>
                              </li>


                              <li><Link
                                   to='programs'
                                   span={true}
                                   smooth={true}
                                   onClick={() => setMenuOpened(false)}
                              >Programs</Link></li>
                              <li><Link
                                   to='Reasons'
                                   span={true}
                                   smooth={true}
                                   onClick={() => setMenuOpened(false)}
                              >Why us</Link></li>
                              <li><Link
                                   to='plan'
                                   span={true}
                                   smooth={true}
                                   onClick={() => setMenuOpened(false)}
                              >Plans</Link></li>
                              <li><Link
                                   to='Testimonials'
                                   span={true}
                                   smooth={true}
                                   onClick={() => setMenuOpened(false)}
                              >Testimonials</Link> </li>
                         </ul>)}

          </div>
     )
}

export default Header