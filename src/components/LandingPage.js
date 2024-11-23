function LandingPage({ onEnterChat }) {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 to-purple-600">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to ChatApp</h1>
            <p className="text-white mb-6">Connect and communicate seamlessly.</p>
            <button
                onClick={onEnterChat}
                className="px-6 py-3 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-100"
            >
                Enter Chat
            </button>
        </div>
    );
}

export default LandingPage;