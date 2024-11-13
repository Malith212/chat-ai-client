import React, { useState } from 'react';

function ChatInput({ onSendMessage }) {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            onSendMessage(input);
            setInput("");
        }
    };

    return (
        <div className="flex border-t border-gray-200 p-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
                onClick={handleSend}
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
            >
                Send
            </button>
        </div>
    );
}

export default ChatInput;
