import React from 'react';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import { useRef } from 'react';



const signupApi = "https://phpwebdevelopmentservices.com/project-react-backend/api/register"
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





const SignupPage = () => {
   const [result, setResult] = useState();
   const [email , setEmail] = useState();
   const [name , setName] = useState();
   const [password, setPassword] = useState();
   const [phone , setPhone] = useState();
   const [confirmPassword, setConfirmPassword] = useState()
   const [errorMessage , setErrorMessage] = useState();


   const inputRefEmail = useRef(null);
   const inputRefPassword = useRef(null);
   const inputRefName = useRef(null);
   const inputRefMobile = useRef(null);
   const inputRefConfirmPass = useRef(null);




   const navigate = useNavigate();

   const handleSignup = () =>{
    let  inputEmail = inputRefEmail.current.value;
    let inputName = inputRefName.current.value;
    let inputPassword = inputRefPassword.current.value;
    let inputMobile = inputRefMobile.current.value;
    let inputConfirmPass = inputRefConfirmPass.current.value;
   setEmail(inputEmail);
   setName(inputName);
   setPassword(inputPassword);
   setPhone(inputMobile);
   setConfirmPassword(inputConfirmPass);
     
   postApiData(signupApi, {
      "params": {
         "name": inputName,
         "email": inputEmail,
         "phone": inputMobile,
         "password": inputPassword,
         "password_confirmation": inputConfirmPass
       }
    } )
  .then((data) => {
    console.log("Search Request succesful Response :", data);
    setResult(data.result);
   //  setToken(data.)
   if(data.error){
      console.log("error occured", data.error)
      setErrorMessage(data.error)
   }
  
    if(data.result){
    alert(" Signup is succesful !");
    navigate("/")
    }

    
  })
  .catch((error) => {
    console.error("Search Request Error:", error.message);
   });

   const checkValidation = () =>{


         //  /validating email
   const emailIsValid = (email) => {
      // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailRegex = /\S+@\S+\.\S+/ 
      return emailRegex.test(email);
    };

    if (!emailIsValid(email)) {
      window.alert("email is invalid or taken");
      return;
    }

   //  validating password

    if (password.length < 8) {
      window.alert('Password must be at least 8 characters long or it is taken !');
      return;
    }

    /// validating phone number
     if(phone.length < 8 ){
      window.alert('phone number must be atleast 8 characters !')
      return;
     }

      // Validating  confirm password
      if (password !== confirmPassword) {
         window.alert('Passwords do not match');
         return;
       }
   }
   checkValidation();

   }
  return (
    <>
     
      <div class="main-center-div">
                  <div class="top-border-div">
                     <div class="login-from-area" style={{marginTop: "150px"}}>
                        <h2>Create Account</h2>
                        <div>
                        <input type="text" class="login-type" placeholder="Full name" ref={inputRefName} name=""/>
                        <div class="clearfix"></div>
                        </div>
                        
                        <div>
                        <input type="text" class="login-type" placeholder="Email" ref={inputRefEmail} name=""/>
                        <div class="clearfix"></div>
                        </div>
                        
                        <div>
                        <input type="text" class="login-type" placeholder="Mobile number" ref={inputRefMobile} name=""/>
                        <div class="clearfix"></div>
                        </div>
                        
                        
                        <div class="password-in">
                        <input id="password-field" type="password" class="login-type" name="password" ref={inputRefPassword} placeholder="password"/>
                        <div class="clearfix"></div>
                        <span toggle="#password-field" class="field-icon fa fa-fw fa-eye toggle-password"></span>
                        </div>
                        <div class="password-in">
                        <input id="password-field" type="password" class="login-type" name="password" ref={inputRefConfirmPass} placeholder="Confirm password"/>
                        <div class="clearfix"></div>
                        <span toggle="#password-field" class="field-icon fa fa-fw fa-eye toggle-password"></span>
                        </div>
                        <p>By clicking Sign In or continue with Facebook or Google, you agree to all <a href=""> Terms of Service</a> and <a href="#"> Privacy Policy</a></p>
                        <button type="submit" class="login-submit" onClick={handleSignup}>Sign up</button>
                     </div>
                     <div class="or-area">
                        <span>Or Continue with</span>
                     </div>
                     <div class="login-socials-area">
                        <div class="socials-btns">
                           <a href="#" class="common-btns facebook-btn">
                           <img src="./images/login-facebook.png" alt=""/> Facebook
                           </a>
                           <a href="#" class="common-btns google-btn">
                           <img src="./images/login-google.png" alt=""/> Google
                           </a>
                        </div>
                        
                     </div>
                  </div>
                  <div class="bottom-account-div">
                     <p>Already have an account? <a href="/login">Login</a></p>
                  </div>
               </div>
    
    </>
  )
}

export default SignupPage
