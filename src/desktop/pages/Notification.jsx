import React, { useEffect, useState } from "react";

const NotificationPage = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/notifications");
                if (!response.ok) {
                    throw new Error("Failed to fetch notifications");
                }
                const data = await response.json();
                setNotifications(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
            <h2 className="text-2xl font-semibold mb-4">Notifications</h2>

            {loading && <p className="text-gray-500">Loading notifications...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && notifications.length === 0 && (
                <p className="text-gray-500">No new notifications</p>
            )}

            {!loading && !error && notifications.length > 0 && (
                <ul className="space-y-4">
                    {notifications.map((notification) => (
                        <li key={notification.id} className="p-4 bg-gray-100 rounded-md shadow">
                            <p className="text-lg font-medium">{notification.message}</p>
                            <span className="text-sm text-gray-500">{new Date(notification.date).toLocaleString()}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NotificationPage;
