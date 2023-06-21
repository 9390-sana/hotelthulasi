
import "./App.css";
import LoginPage from "./components/LoginPage";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignupPage";
import HomePage from "./pages/HomePage";
import BasicTable from "./components/BasicTable";
import AddHotel from "./components/AddHotel";
import UpdateHotel from "./components/UpdateHotel";
import MenuBar from "./components/MenuBar";
import AddReservations from "./components/AddReservations";
//import BasicTable1 from "./components/BasicTable1";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/Loginpage" element={<LoginPage />}></Route>
        <Route path="/SignupPage" element={<SignUp />}></Route>
        <Route path="/Homepage" element={<HomePage />}></Route>
        <Route path="/AddHotel" element={<AddHotel />}></Route>
        <Route path="/UpdateHotel/:hotel_id" element={<UpdateHotel />}></Route>
        <Route path="/MenuBar" element={<MenuBar />}></Route>
        <Route path="/AddReservations" element={<AddReservations />}></Route>
       <Route path="/BasicTable" element={<BasicTable />}></Route>
      
      </Routes>
    </BrowserRouter>

    // <div>
    //   <LoginPage />
    //   <WelcomePage />
    // <SignUpPage />
    // </div>
  );
}

export default App;
