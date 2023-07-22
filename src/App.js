import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Search from "./routes/Search";
import EditProfile from "./routes/EditProfile";
import Signup from "./routes/Signup";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DataContextProvider, { DataContext } from "./components/DataContext";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";
import EditProfilePage from "./components/Edit_Profile";
import SignupPage from "./components/SignupPage";
import { Navigate } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);
  const [keyword, setKeyword] = useState(null);
  const [cart, setCart] = useState([]);
  const AppState = [
    [token, setToken],
    [keyword, setKeyword],
    [cart, setCart]
  ];
  console.log("Updated AppStates:", AppState);
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location", location)


  useEffect(()=>{
    if(location.pathname === "/signup")return
    const token = localStorage.getItem("token");
    if(!token){
      navigate("/login")
    }
  
  },[])

  return (
    <div className="App">

      <Navbar AppState={AppState}></Navbar>
      
      <DataContextProvider>
      <Routes>
      
     
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/editprofile" element={<EditProfilePage/>}/>
        <Route path="/search" element={<SearchPage />}/>
       
      </Routes>
      </DataContextProvider>
     
      <Footer></Footer>
    </div>
  );
}

export default App;

async function getApiData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function postApiData(url, postData, auth_token) {
  try {
    let headers = {
      "Content-Type": "application/json",
    };
    if (auth_token) {
        headers["Authorization"] = `Bearer ${auth_token}`;
    }

    const response = await fetch(url, {
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

async function search(keyword, category = null, min_price = 0, max_price = 1000, order = 1) {
  const search_data_api = "https://phpwebdevelopmentservices.com/project-react-backend/api/common-data";
  const search_data = {
    "params": {
      "cat_slug": category,
      "sort_by": order,
      "category_id": 1,
      "sub_category_id": 1,
      "keyword": keyword,
      "price_range": [
        min_price,
        max_price
      ],
      "offset": 0
    }
  }

  return postApiData(search_data_api, search_data)
    .then((data) => {
      return data.result;
    })
    .catch((error) => {
      console.error("Search Error:", error);
    });
}
