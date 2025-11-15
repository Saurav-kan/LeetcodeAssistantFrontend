import React from 'react';
import './injected-uis.css';

/**
 * AlgoMentorPanel is the root React component for the injected UI.
 * It creates a fixed-position panel on the page to house the extension's features,
 * styled via an external CSS file.
 */
const AlgoMentorPanel = () => {
  return (
    <div className="algomentor-panel">
      {/* Header section of the panel */}
      <div className="algomentor-header"> AlgoMentor Panel</div>

      {/* Main content area, which will be populated with features later */}
      <div className="algomentor-content">
        <p>Welcome to AlgoMentor! Your AI assistant for LeetCode.</p>
        {/* Future components will be rendered here */}
      </div>

      {/* Footer section for branding or status information */}
      <div className="algomentor-footer">AlgoMentor v0.1.0</div>
    </div>
  );
};

export default AlgoMentorPanel;
