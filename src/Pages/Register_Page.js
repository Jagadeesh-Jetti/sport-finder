import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "D:/Sport-finder/sport-finder/src/CSS/Register.css"
const RegisterForm = () => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Password validation regex
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone number validation regex
    const phoneRegex = /^\d{10}$/;

    // Validation checks
    if (
      !passwordRegex.test(password) ||
      !emailRegex.test(email) ||
      !phoneRegex.test(phoneNum)
    ) {
      alert('Please provide valid input!');
      return;
    }

    // Display success message and redirect to login page
    alert('Registration made successfully! Redirecting to login page...');
    window.location.href = '/login';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Registration Form</h2>
      </div>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          placeholder="Enter your user name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNum">Phone Number:</label>
        <input
          type="tel"
          id="phoneNum"
          placeholder="Enter your phone number"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
      <div>
        <Link to="/login">Already have an account? Login here</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
