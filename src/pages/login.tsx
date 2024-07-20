import React, { useState, FormEvent } from 'react';
import styles from './login.module.css'; // Assuming you use CSS modules

const LoginPage: React.FC = () => {
  const [firstName, setFirstName] = useState('xixixr');
  const [password, setLastName] = useState('password123');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    // Handle form submission logic here
    console.log('Submitted:', { firstName, password });
  };

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={password}
            onChange={(e) => setLastName(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </main>
  );
};

export default LoginPage;

