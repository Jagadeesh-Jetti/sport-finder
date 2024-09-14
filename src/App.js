<<<<<<< HEAD
import { Routes, Route } from "react-router";
import { HomePage } from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './Pages/Register_Page';
import LoginPage from './Pages/Login_page';
import CreateProfileForm from './Pages/Create_Profile';
import ViewProfilePage from './Pages/View_Profile'; // Import the ViewProfilePage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-profile" element={<CreateProfileForm />} /> {/* corrected route path */}
        <Route path="/view-profile" element={<ViewProfilePage />} /> {/* corrected route path */}
      </Routes>
    </Router>
  );
};
>>>>>>> 5f876d0cadb315603bc428e0e94edec75225b27d

export default App;
