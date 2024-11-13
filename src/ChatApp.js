import React, { useState } from 'react';
import axios from 'axios';
import ChatBox from './components/ChatBox';
import ChatInput from './components/ChatInput';

function ChatApp() {
    const [messages, setMessages] = useState([]);

    const sendMessage = async (userMessage) => {
        const newMessage = { sender: "You", text: userMessage };
        setMessages((prev) => [...prev, newMessage]);

        try {
            const response = await axios.post("http://127.0.0.1:5000/ask", { question: userMessage });
            const botMessage = { sender: "Chatbot", text: response.data.answer };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            const errorMessage = { sender: "Chatbot", text: "Error: Unable to connect to the server." };
            setMessages((prev) => [...prev, errorMessage]);
        }
    };

    return (
        <div className="chat-app">
            <ChatBox messages={messages} />
            <ChatInput onSendMessage={sendMessage} />
        </div>
    );
}

export default ChatApp;
