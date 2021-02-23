import React, { useState } from 'react';
import '../App.css'

const LogIn = ({user, handleChange, handleSubmit}) => {
  const [newUsername, setNewUsername] = useState("");

  const inputNewUsername = (event) => {
    setNewUsername(event.target.value);
  }


  return (
    <div className="container">
      <div className="logInContainer">
        <div className="logInHeader">
          <h3>Welcome to PitPatApp</h3>
        </div>
        <div className="logInForm">
          <form onSubmit={handleSubmit}>
            <div className="form-group userNameField">
              <div>
                <label>Please enter your username for this chat:</label><br></br>
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
              <button className="btn logInButton" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn;
