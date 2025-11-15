# 🔮 AlgoMentor: Your LeetCode AI Assistant

AlgoMentor is a Chrome extension that acts as your personal AI-powered assistant for LeetCode, providing hints, explaining solutions, and helping you practice more effectively.

## ✨ Features

- **On-Demand Hints:** Get contextual hints for any LeetCode problem without revealing the full solution.
- **Solution Explanations:** Understand different approaches and data structures for a given problem.
- **Code Analysis:** (Coming Soon) Get feedback on your code's efficiency and style.
- **Seamless Integration:** The assistant is injected directly into the LeetCode problem page for a smooth user experience.

## 🚀 Getting Started

This project is built with [WXT](https://wxt.dev/), a next-gen framework for building web extensions.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [pnpm](https://pnpm.io/installation) (or npm/yarn)

### Development

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd LeetcodeAssistant/LeetcodeAssistantFrontend/wxt-dev-wxt
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Start the development server:**
    ```bash
    pnpm dev
    ```

4.  **Load the extension in your browser:**
    - Open Chrome and navigate to `chrome://extensions`
    - Enable "Developer mode"
    - Click "Load unpacked"
    - Select the `LeetcodeAssistant/LeetcodeAssistantFrontend/wxt-dev-wxt/.output/chrome-mv3-dev` directory.

The extension will automatically reload as you make changes to the code.

## 🛠️ Tech Stack

- [WXT](https://wxt.dev/) - Extension development framework
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Language
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling

---

Happy coding!