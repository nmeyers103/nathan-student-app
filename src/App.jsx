
import './App.css';

function App() {
  return (
    <div className="page">
      <div className="profile-card">
        <div className="top-section">
          <span className="tag">UVU STUDENT</span>
          <h1>Hello, I'm Nathan!</h1>
          <p>
            Welcome to my personal student application.
          </p>
        </div>

        <div className="student-info">
          <h2>Student Information</h2>

          <div className="info-item">
            <span>Full Name</span>
            <strong>Nathan Meyers</strong>
          </div>

          <div className="info-item">
            <span>UVU Student ID</span>
            <strong>10832388</strong>
          </div>
        </div>

        <div className="footer">
          Built with React and deployed using AWS.
        </div>
      </div>
    </div>
  );
}

export default App;
