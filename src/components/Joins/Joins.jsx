import React, { useRef } from 'react'
import "./Joins.css"
import emailjs from '@emailjs/browser'

const Joins = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_do0akzd', 'template_fiu6xl7', form.current, '6fbU78Vs3YBdpwAMt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="join" id="join-us">
        <div className="left-j">
          <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
        <form ref={form} className="email-container"  onSubmit={sendEmail}>
          <input type="email" name="user_email" id="" placeholder='Enter Your Email adress' />
          <button className='btn btn-j'>Join Now</button>
        </form>
        </div>
    </div>
  )
}

export default Joins