

import { Route , Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Search from "./routes/Search";
import EditProfile from "./routes/EditProfile";
import Signup from "./routes/Signup";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/editprofile" element={<EditProfile/>}/>
      <Route path="/search" element={<Search/>}/>

    </Routes>
    </div>
  );
}

export default App;
