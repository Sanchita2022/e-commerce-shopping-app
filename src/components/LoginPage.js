import { error } from 'jquery';
import React from 'react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useRef } from 'react';

const postData = {
   "params": {
     "email": "user1@mail.com",
     "password": "PassWord12345"
   }
 }






const loginApi = "https://phpwebdevelopmentservices.com/project-react-backend/api/login"
async function postApiData(loginApi, postData, auth_token) {
   try {
     let headers = {
       "Content-Type": "application/json",
     };
     if (auth_token) {
         headers["Authorization"] = `Bearer ${auth_token}`;
     }
 
     const response = await fetch(loginApi, {
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





const LoginPage = ({AppState}) => {
  
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [result, setResult] = useState()
   // const [ token , setToken] = React.useState(AppState[0])
   const navigate = useNavigate();
   const inputRef1 = useRef(null);
   const inputRef2 = useRef(null);



 
  
  function handleLogin(){
  let inputEmail = inputRef1.current.value;
  
  let inputPassword = inputRef2.current.value;

  setEmail(inputEmail);
  setPassword(inputPassword);

   
   postApiData(loginApi, {
      "params": {
        "email": inputEmail,
        "password": inputPassword
      }
    } )
  .then((data) => {
    console.log("Search Request Response:", data);
    setResult(data.result);
   //  setToken(data.)
  
    if(data.result){
    alert(" Login is succesful !");
    navigate("/")
    }

    
  })
  .catch((error) => {
    console.error("Search Request Error:", error);
    if(error){
    alert("Please create your account or put valid inputs to sign in");
    }

   });
  

   const checkValid = () =>{
         //validating email
      const emailIsValid = (mail) => {
         // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         const emailRegex = /\S+@\S+\.\S+/ 
         return emailRegex.test(mail);
       };

         if(password.length < 8){
             //validating password
            window.alert('Password is incorrect please put valid one !');
            
         }
         else if (!emailIsValid(email))
         {
            window.alert("email is invalid or need to signup ");
            

         }
         else{
            window.alert('ready to login ?')
         }

   
       }
       checkValid()
      
   }
  

  return (
  <>  
    
      <div class="search_main_section">
         <div class="container">
            <div class="row res_padd">
               <div class="main-center-div">
                  <div class="top-border-div">
                     <div class="login-from-area">
                        <h2>Sign In</h2>
                        <div>
                        <input type="text" class="login-type" placeholder="Email or mobile number" ref={inputRef1} name=""/>
                        <div class="clearfix"></div>
                        </div>
                        <div class="password-in">
                        <input id="password-field" type="password" class="login-type"  ref={inputRef2} name="password" placeholder="password"/>
                        <div class="clearfix"></div>
                        <span toggle="#password-field" class="field-icon fa fa-fw fa-eye toggle-password"></span>
                        </div>
                        <div class="remmber-area">
                           <label class="list_checkBox">Remember me
                           <input type="checkbox" name="text"/>
                           <span class="list_checkmark"></span>
                           </label>
                           <a class="forgot-passwords" href="#">Forgot Password?</a>
                        </div>
                        <p>By clicking Sign In or continue with Facebook or Google, you agree to all <a href=""> Terms of Service</a> and <a href="#"> Privacy Policy</a></p>
                        <button type="submit" class="login-submit" onClick={handleLogin}>Sign In</button>
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
                     <p>Don't have an account? <a href="/signup">Create Account</a></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    
  </>
  )
  }


export default LoginPage
