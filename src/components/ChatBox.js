import React from 'react';
import './ChatBox.css';

function ChatBox({ messages }) {
    return (
        <div className="chat-box">
            {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender === "You" ? "user-message" : "bot-message"}`}>
                    <strong>{msg.sender}:</strong> {msg.text}
                </div>
            ))}
        </div>
    );
}

export default ChatBox;
