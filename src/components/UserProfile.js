function UserProfile() {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">User Profile</h2>
            <div className="flex items-center mb-4">
                <img src="/path-to-avatar.jpg" alt="Avatar" className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <p className="font-semibold">User Name</p>
                    <p className="text-gray-500">user@example.com</p>
                </div>
            </div>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md">Edit Profile</button>
        </div>
    );
}

export default UserProfile;