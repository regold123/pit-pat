import React from 'react';
import '../App.css'

const ChatRoom = ({username}) => {

  return (
    <div className="chatBox">
      <div className="chatBoxHeading">
        <h2>Welcome {username}</h2>
        <h4>Here goes the Chat Box</h4>
      </div>
    </div>
  )
}

export default ChatRoom;
