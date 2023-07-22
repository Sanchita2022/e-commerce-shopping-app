import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import validation from "./validation";
import { useContext } from "react";
import { DataContext } from "./DataContext";

const signupApi =
  "https://phpwebdevelopmentservices.com/project-react-backend/api/register";
async function postApiData(signupApi, postData, auth_token) {
  try {
    let headers = {
      "Content-Type": "application/json",
    };
    if (auth_token) {
      headers["Authorization"] = `Bearer ${auth_token}`;
    }

    const response = await fetch(signupApi, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(response);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    return error;
  }
}

const SignupPage = ({AppState}) => {
  // const [token, setToken] = useState(AppState[0]);
  const [result, setResult] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const {token , updateToken} = useContext(DataContext);



  const inputRefEmail = useRef(null);
  const inputRefPassword = useRef(null);
  const inputRefName = useRef(null);
  const inputRefMobile = useRef(null);
  const inputRefConfirmPass = useRef(null);

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    let inputEmail = inputRefEmail.current.value;
    let inputName = inputRefName.current.value;
    let inputPassword = inputRefPassword.current.value;
    let inputMobile = inputRefMobile.current.value;
    let inputConfirmPass = inputRefConfirmPass.current.value;
    setEmail(inputEmail);
    setName(inputName);
    setPassword(inputPassword);
    setPhone(inputMobile);
    setConfirmPassword(inputConfirmPass);

    let errors = validation(values);
    setErrors(errors);

    // if(Object.keys(errors).length == 0)
    postApiData(signupApi, {
      params: {
        name: inputName,
        email: inputEmail,
        phone: inputMobile,
        password: inputPassword,
        password_confirmation: inputConfirmPass,
      },
    })
      .then((data) => {
        console.log("Search Request succesful Response :", data);
        setResult(data.result);
        
        if (data.error) {
          console.log("error occured", data.error);
          setErrors(data.error)
        } else if (data.result) {
          alert(" Signup is succesful !");
          updateToken(data.result.token);
          localStorage.setItem("token",data.result.token)
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Search Request Error:", error.message);
      });

    //  const checkValidation = () =>{

    //        //  /validating email
    //  const emailIsValid = (email) => {
    //     // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     const emailRegex = /\S+@\S+\.\S+/
    //     return emailRegex.test(email);
    //   };

    //   if (!emailIsValid(email)) {
    //     window.alert("email is invalid or taken");
    //     return;
    //   }

    //  //  validating password

    //   if (password.length < 8) {
    //     window.alert('Password must be at least 8 characters long or it is taken !');
    //     return;
    //   }

    //   /// validating phone number
    //    if(phone.length < 8 ){
    //     window.alert('phone number must be atleast 8 characters !')
    //     return;
    //    }

    //     // Validating  confirm password
    //     if (password !== confirmPassword) {
    //        window.alert('Passwords do not match');
    //        return;
    //      }
    //  }
    //  checkValidation();
  };
  return (
    <>
      <div className="main-center-div">
        <div className="top-border-div">
          <div className="login-from-area" style={{ marginTop: "150px" }}>
            <h2>Create Account</h2>
            <div>
              <input
                type="text"
                className="login-type"
                placeholder="Full name"
                ref={inputRefName}
                name="name"
                onChange={handleInput}
              />
              <div className="clearfix"></div>
              {errors.email &&
              (<p style={{ color: "red" }}>{errors.name}</p>)
              }
            </div>

            <div>
              <input
                type="text"
                className="login-type"
                placeholder="email"
                ref={inputRefEmail}
                name="email"
                onChange={handleInput}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email}</p>
              )}

              <div className="clearfix"></div>
            </div>

            <div>
              <input
                type="text"
                className="login-type"
                placeholder="Mobile number"
                ref={inputRefMobile}
                name="phone"
                onChange={handleInput}
              />
              {errors.phone && (
                <p style={{ color: "red" }}>{errors.phone}</p>
              )}

              <div className="clearfix"></div>
            </div>

            <div className="password-in">
              <input
                id="password-field"
                type="password"
                className="login-type"
                name="password"
                ref={inputRefPassword}
                placeholder="password"
                onChange={handleInput}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}

              <div className="clearfix"></div>
              <span
                toggle="#password-field"
                className="field-icon fa fa-fw fa-eye toggle-password"
              ></span>
            </div>

            <div className="password-in">
              <input
                id="password-field"
                type="password"
                className="login-type"
                name="confirmPassword"
                ref={inputRefConfirmPass}
                placeholder="Confirm password"
                onChange={handleInput}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red" }}>{errors.confirmPassword}</p>
              )}

              <div className="clearfix"></div>
              <span
                toggle="#password-field"
                className="field-icon fa fa-fw fa-eye toggle-password"
              ></span>
            </div>
            <p>
              By clicking Sign In or continue with Facebook or Google, you agree
              to all <a href=""> Terms of Service</a> and{" "}
              <a href="#"> Privacy Policy</a>
            </p>
            <button type="submit" className="login-submit" onClick={handleSignup}>
              Sign up
            </button>
          </div>
          <div className="or-area">
            <span>Or Continue with</span>
          </div>
          <div className="login-socials-area">
            <div className="socials-btns">
              <a href="#" className="common-btns facebook-btn">
                <img src="./images/login-facebook.png" alt="" /> Facebook
              </a>
              <a href="#" className="common-btns google-btn">
                <img src="./images/login-google.png" alt="" /> Google
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-account-div">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
