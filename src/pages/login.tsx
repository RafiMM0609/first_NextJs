import React, { useState, FormEvent } from 'react';
import styles from './login.module.css'; // Assuming you use CSS modules

const LoginPage: React.FC = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    // Handle form submission logic here
    console.log('Submitted:', { firstName, lastName });
  };

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="fname">First name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lname">Last name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={lastName}
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

