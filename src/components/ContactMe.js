import React from "react";
import matt from "../assets/images/mrmattt.png";
import Rectangle from "../assets/images/Rectangle.png";
import { Button } from "../components";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
  return (
    <div className='hero-section'>
      <div className='container d-flex justify-content-between '>
        <div className='user-name'>
          <h1>CONTACT ME</h1>
          <p className='contact-text'>
            You can reach out to me via any of these channels or drop me a
            message here, I will be glad to respond.
          </p>
          <p>
            <img src={Rectangle} alt='rectangle' />
          </p>
        </div>
        <div className='photo-box'>
          <img
            src={matt}
            alt='mr-matt'
            className='img-fluid '
            width={"400px"}
          />
        </div>
      </div>

      <div className='container d-flex justify-content-between message'>
        <div>
          <div className='text-center'>
            <h3>Send a message</h3>
            <p>
              Got a question? Need my service? Kindly drop your message here...
            </p>
          </div>
          <form>
            <div class='mb-3'>
              <input
                type='fullname'
                class='form-control'
                id='fullname'
                aria-describedby='emailHelp'
                placeholder='Enter your name'
              />
            </div>
            <div class='mb-3'>
              <input
                type='email'
                class='form-control'
                id='email'
                aria-describedby='emailHelp'
                placeholder='Enter your email address'
              />
            </div>
            <div>
              <textarea
                class='form-control'
                id='textarea1'
                rows='3'
                placeholder='Type your message....'
              ></textarea>
            </div>
          </form>
          <div className='text-center mt-5'>
            <Button label={"Send Message"} className={"viewtheCV"} />
          </div>
        </div>
        <div className='profile-url'>
          <h6>You can also get in touch with me via any of these links.</h6>
          <div className='socialMedia-icons'>
            <ul>
              <li>
                <BsGithub className="icons"/>
                <span>Github profile:</span>
                <span className="icon-link"><a href='https://github.com/matthewabkoye'>
                  https://github.com/matthewabkoye
                </a></span>
              </li>
              <li>
                <AiFillLinkedin className="icons"/>
                <span>LinkedIn profile:</span>
                <span className="icon-link"><a href='https://www.linkedin.com/in/matthew-abikoye'>
                  Github profile:
                </a></span>
              </li>
              <li>
                <MdEmail className="icons"/>
                <span>Email:</span>
                <span className="icon-link"><a href='https://www.matthewabikoye@gmail.com/'>
                  https://www.matthewabikoye@gmail.com/
                </a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
