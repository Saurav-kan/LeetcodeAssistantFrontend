import { defineContentScript } from "#imports";
import React from "react";
import { createRoot } from "react-dom/client";
import AlgoMentorPanel from "./injected-ui.tsx";

export default defineContentScript({
  // This script will run on all LeetCode problem pages.
  matches: ["*://leetcode.com/problems/*"],

  // Use 'document_idle' to ensure the page's DOM is fully loaded before injecting the UI.
  runAt: "document_idle",

  main() {
    console.log("🔮 AlgoMentor: Content script loaded.");

    // 1. Create a target DOM element to mount our React application.
    // This ensures our UI is decoupled from the website's existing DOM structure.
    const uiContainer = document.createElement("div");
    uiContainer.id = "algomentor-root";
    document.body.appendChild(uiContainer);

    // 2. Mount the React application into the target container.
    // We use createRoot for modern React concurrent features.
    const root = createRoot(uiContainer);
    root.render(
      <React.StrictMode>
        <AlgoMentorPanel />
      </React.StrictMode>
    );

    console.log("🔮 AlgoMentor: React UI injected.");
  },
});
