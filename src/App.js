// App.js
import React, { useState } from 'react';
import ChatApp from './ChatApp';
import LandingPage from './LandingPage';

function App() {
    const [showChat, setShowChat] = useState(false);

    const handleEnterChat = () => {
        setShowChat(true);
    };

    const handleCancelChat = () => {
        setShowChat(false);
    };

    return (
        <div className="App">
            {showChat ? (
                <div className="relative">
                    <button
                        onClick={handleCancelChat}
                        className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
                    >
                        Cancel Chat
                    </button>
                    <ChatApp />
                </div>
            ) : (
                <LandingPage onEnterChat={handleEnterChat} />
            )}
        </div>
    );
}

export default App;
