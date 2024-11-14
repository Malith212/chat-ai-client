// LandingPage.js
import React from 'react';

function LandingPage({ onEnterChat }) {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Chatbot</h1>
            <p className="mb-8 text-lg">Start chatting with our AI assistant!</p>
            <button
                onClick={onEnterChat}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
                Enter Chat
            </button>
        </div>
    );
}

export default LandingPage;
