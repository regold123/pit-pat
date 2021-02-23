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

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      user: this.state.username,
    });
  };

  render() {
    const user = this.state.user;
    const handleChange = this.handleChange;
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
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        </section>
      </div>
    );
  }
}

export default App;
