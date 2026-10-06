import PostComposer from "./components/PostComposer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="scanlines" aria-hidden="true" />

      <header className="header">
        <div className="brand-mark">SMD // 01</div>
        <div className="eyebrow">NEON CONTENT TERMINAL</div>
        <h1>Social Media <span>Drafter</span></h1>
        <p>Compose. Validate. Save. Your next post starts here.</p>
      </header>

      <div className="container">
        <div className="status-bar">
          <span><i className="status-dot" /> SYSTEM ONLINE</span>
          <span>CONTENT_WORKSPACE / LOCAL</span>
        </div>
        <PostComposer />
      </div>

      <footer className="footer">SOCIAL MEDIA DRAFTER <span>•</span> CYBERPUNK UI</footer>
    </div>
  );
}

export default App;
