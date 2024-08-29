import React, { useState } from "react";

function Login2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");


  const handleSubmit = () => {
    setSubmittedUsername(username);+
    setSubmittedPassword(password);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Login Form</h1>
      
      <div>
        <label>
          Username: 
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <br />
      
      <div>
        <label>
          Password: 
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <br />
      
      <button onClick={handleSubmit}>Submit</button>

      {submittedUsername && (
        <div>
          <h2>Submitted Data</h2>
          <p>Username: {submittedUsername}</p>
          <p>Password: {submittedPassword}</p>
        </div>
      )}
    </div>
  );
}

export default Login2;
