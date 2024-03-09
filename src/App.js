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

export default App;
