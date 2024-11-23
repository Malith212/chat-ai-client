function Settings() {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <div>
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Enable Notifications
                </label>
            </div>
        </div>
    );
}

export default Settings;