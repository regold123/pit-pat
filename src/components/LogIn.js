import React, { useState } from 'react';
import '../App.css'

const LogIn = ({username, handleChange, handleSubmit}) => {
  const [newUsername, setNewUsername] = useState("");

  const inputNewUsername = (event) => {
    setNewUsername(event.target.value);
  }

  const logInUser = (text) => {
    console.log(text);;
  }


  return (
    <div className="container">
      <div className="logInHeader">
        <h3>Welcome to PitPatApp</h3>
      </div>
      <div className="logInForm">
        <form
          onSubmit={handleSubmit}
        >
          <div className="form-group userNameField">
            <div>
              <label>Enter your username for this chat:</label><br></br>
              <input
                id="username"
                type="text"
                className="form-control"
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button className="btn submitButton" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn;
