import './normal.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="sidemenu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="avatar">Me</div>
            <div className="message">Message</div>
          </div>
        </div>
        <div className="chat-input-holder">
          <textarea 
            rows="1"
            className="chat-input-text-area"
          >
          </textarea>
        </div>
      </section>
    </div>
  );
}

export default App;