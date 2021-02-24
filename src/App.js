import React from 'react';
import './App.css';
import LogIn from './components/LogIn';
import ChatRoom from './components/ChatRoom';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        user: "",
      };
  }

  handleSubmit = (username) => {
      this.setState({
        user: username,
      });
  };

  render() {
    const user = this.state.user;
    const handleSubmit = this.handleSubmit;

    return (
      <div className="App">
        <header>

        </header>

        <section>
          {user ?
            <ChatRoom
              user={user}
            /> :
            <LogIn
              user={user}
              handleSubmit={handleSubmit}
            />
          }
        </section>
      </div>
    );
  }
}

export default App;
