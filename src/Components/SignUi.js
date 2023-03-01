import "./SignUi.css";
import profile from "./../image/a.jpg";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
function SignUi() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Signup Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input
                type="text"
                placeholder="Enter Your Mail"
                className="name"
              />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input
                type="password"
                placeholder="Enter Password"
                className="name"
              />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a> Or &nbsp;
              <a href="/">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUi;
