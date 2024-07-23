'use client'; 
import React, { useState, FormEvent } from 'react';

const LoginPage: React.FC = () => {
  const [firstName, setName] = useState('xixixr');
  const [password, setPass] = useState('password123');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    // Handle form submission logic here
    console.log('Submitted:', { firstName, password });
  };

  return (
    <main className="container">
      <form onSubmit={handleSubmit} className="loginForm">
        <div className="formGroup">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={firstName}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="submitButton">Submit</button>
      </form>
    </main>
  );
};

export default LoginPage;

