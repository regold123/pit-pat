import React, { useRef, useState } from 'react';
import '../App.css';

import firebase from 'firebase/app';
import firestore from '../services/Firebase.js';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const ChatRoom = ({user}) => {
  const [formValue, setFormValue] = useState('');
  const [classToApply, setClassToApply] = useState("");

  const scrollHere = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query);

  const sendMessage = async (e) => {
    e.preventDefault();

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      user,
    })

    setFormValue('');
    scrollHere.current.scrollIntoView({ behavior: 'smooth' });
  }

  const updateFormValue = (e) => {
    setFormValue(e.target.value);
  }

  return (
    <div className="chatBox container">
      <div className="chatBoxHeading">
      </div>
      <div className="container chatScreen">
        <div className="chatBody">
            {messages && messages.map(msg => (
              <div className={"chatBubble" + (user === msg.user ? "FromThisUser" : "")}>
                <div className="profileName">{msg.user}</div>
                <div className="chatText">{msg.text}</div>
              </div>
            ))}
        </div>
        <div>
          <form onSubmit={sendMessage}>
            <div className="form-group reply-group">
              <div className="replyField">
                <input
                  id="newReplyBox"
                  className="form-control"
                  value={formValue}
                  onChange={updateFormValue}
                />
              </div>
              <div>
                <button className="btn replyButton" type="submit" disabled={!formValue}>Send</button>
              </div>
              <span ref={scrollHere}></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatRoom;
