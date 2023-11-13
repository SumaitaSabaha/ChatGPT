import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="top">
          <div className="logo"><img src="" alt="" /><span className="brand">ChatGPT</span></div>
          <button className="button"><img src="" alt="" className="addBtn"/>New Chat</button>
          <div className="queries">
            <button className="query"><img src="" alt=""/>What is Programming ?</button>
            <button className="query"><img src="" alt=""/>What is Programming ?</button>
          </div>

        </div>
        <div className="bottom">

        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;