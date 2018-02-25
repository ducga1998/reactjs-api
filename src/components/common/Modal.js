
 import React, { PropTypes } from "react";

const Modal = () => {


  return <div>
      <div className="overlay" />
      <div className="modal position">
        <img src="https://www.dropbox.com/s/poqtu9ihb4xsmq3/mn-logo.png?raw=1" className="logo" />
        <div className="brand login-text">
          Sign in with your email or username<br />
          <br />
          <strong>OR</strong>
          <br />
          <br /> Use Facebook secure login for quick access to your account.
        </div>
        <button className="brand login flat-button facebook">
          Continue with Facebook
        </button>
        <div className="form position">
          <a href="#">
            <button className="close">x</button>
          </a>
          <div className="form-inner">
            {/* Tabs*/}
            <div className="tabs">
              <ul className="tabs">
                <li className="current" data-tab="member">
                  <a href="#member">I am a member</a>
                </li>
                <li data-tab="new">
                  <a href="#new">I am new here</a>
                </li>
              </ul>
              {/*Login Form */}
              <div className="form-content current" id="member">
                <form id="sign-in">
                  <input type="email" name="login-id" id="user" placeholder="USERNAME / EMAIL" className="field" required />
                  <input type="password" name="usrpw" placeholder="PASSWORD" className="field" required />
                  <div className="clear" />
                  <input type="checkbox" name="rmbrme" id="custom-check" className="check" />
                  <label htmlFor="custom-check" className="check-label secondary-text">
                    Remember me
                  </label>
                  <a href>
                    <span className="forgot secondary-text">
                      Forgot password?
                    </span>
                  </a>
                  <button id="submit" name="sign-in-button" className="flat-button signin">
                    Log In
                  </button>
                </form>
              </div>
              {/*Registration form*/}
              <div className="form-content" id="new">
                <form id="reg">
                  <input type="text" name="login-id" id="user" placeholder="USERNAME" className="field" required />
                  <input type="email" name="email" id="usremail" placeholder="EMAIL ADDRESS" className="field" required />
                  <input type="password" name="usrpw" placeholder="PASSWORD" className="field" required />
                  <button id="submit" name="register-button" className="flat-button signin">
                    Sign Up
                  </button>
                  <div className="clear" />
                  <input type="checkbox" name="promo" id="promo-check" className="check" defaultChecked />
                  <label htmlFor="promo-check" className="check-label secondary-text promo">
                    I'd like to receive special offers and discount coupons. No spam!
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;


};



export default Modal;
