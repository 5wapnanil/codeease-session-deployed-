import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GameScreen.css";

const GameScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const difficulty = location.state?.difficulty || "Unknown";

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Easy":
        return "rgba(0, 255, 240, 0.8)";
      case "Medium":
        return "rgba(0, 124, 240, 0.8)";
      case "Hard":
        return "rgba(138, 43, 226, 0.8)";
      default:
        return "rgba(0, 255, 240, 0.8)";
    }
  };

  return (
    <>
      <div className="scanline"></div>
      <div className="game-container">
        <div className="game-card">
          <div className="card-glow"></div>
          <h1 className="game-title">GAME ACTIVE</h1>
          <div className="divider"></div>
          <div className="info-section">
            <p className="info-label">SELECTED DIFFICULTY:</p>
            <div className="difficulty-badge" style={{ borderColor: getDifficultyColor() }}>
              <span className="difficulty-text" style={{ color: getDifficultyColor() }}>
                {difficulty}
              </span>
              <div className="badge-glow" style={{ boxShadow: `0 0 20px ${getDifficultyColor()}` }}></div>
            </div>
          </div>
          <button 
            className="go-back-button" 
            onClick={() => navigate("/")}
          >
            Go Back
          </button>
          <div className="hologram-effect"></div>
        </div>
      </div>
    </>
  );
};

export default GameScreen;
