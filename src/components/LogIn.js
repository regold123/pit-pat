import React, { useState } from 'react';
import '../App.css'
import firebase from 'firebase/app';
import firestore from '../services/Firebase.js';
import { useCollectionData } from 'react-firebase-hooks/firestore';


const LogIn = ({user, handleSubmit}) => {
  const [username, setNewUsername] = useState("");
  const messagesRef = firestore.collection('messages');
  const [messages] = useCollectionData(messagesRef);

  const inputNewUsername = async (e) => {
    setNewUsername(e.target.value);
  }

  const checkUsername = (username) => {
    const allUsers = messages.map(msg => {return msg.user})
    {allUsers.includes(username) ? alert("This username already exists, please try a different name.") : handleSubmit(username);}
  }

  return (
    <div className="container">
      <div className="logInContainer">
        <div className="logInHeader">
          <h3>Welcome to PitPatApp</h3>
        </div>
        <div className="logInForm">
          <form onSubmit={() => {
            checkUsername(username)}}>
            <div className="form-group userNameField">
              <div>
                <label>Please enter your username for this chat:</label><br></br>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  onChange={inputNewUsername}
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
