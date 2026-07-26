import React, { useState } from "react";
import "../styles/AiDrawerr.css";

function AiDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="ai-btn" onClick={() => setOpen(true)}>
        🤖 AI
      </button>

      <div className={`ai-drawer ${open ? "open" : ""}`}>

        <div className="drawer-header">
          <h4>🤖 AI Career Assistant</h4>

          <button className="close-btn" onClick={() => setOpen(false)}> ✕ </button>
        </div>

        <div className="drawer-body">

          <div className="ai-message">
            👋 Hello! Ask me anything about jobs.
          </div>
        </div>
        <div className="drawer-footer">

          <input type="text" placeholder="Ask anything..."/>
          <button> Send ➤</button>

        </div>

      </div>
    </>
  );
}

export default AiDrawer;