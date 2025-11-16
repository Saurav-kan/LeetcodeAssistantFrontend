import React, { useState } from 'react';
import './injected-uis.css';

/**
 * Circular Score Component
 * Displays a score as a circular progress bar
 */
const ScoreCircle = ({ score }: { score: number }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="score-circle-container">
      <svg className="score-circle-svg" viewBox="0 0 120 120">
        {/* Background circle */}
        <circle
          className="score-circle-bg"
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          className="score-circle-progress"
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className="score-circle-text">
        <span className="score-value">{score}</span>
        <span className="score-label">Score</span>
      </div>
    </div>
  );
};

/**
 * AlgoMentorPanel is the root React component for the injected UI.
 * It creates a fixed-position panel on the page to house the extension's features,
 * styled via an external CSS file.
 */
const AlgoMentorPanel = () => {
  const [score] = useState(75); // Example score, can be made dynamic later

  return (
    <div className="algomentor-panel">
      {/* Header section of the panel */}
      <div className="algomentor-header"> AlgoMentor Panel</div>

      {/* Main content area, which will be populated with features later */}
      <div className="algomentor-content">
        <ScoreCircle score={score} />
        <p>Welcome to AlgoMentor! Your AI assistant for LeetCode.</p>
        {/* Future components will be rendered here */}
      </div>

      {/* Footer section for branding or status information */}
      <div className="algomentor-footer">AlgoMentor v0.1.0</div>
    </div>
  );
};

export default AlgoMentorPanel;
