import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialToken =
        localStorage.getItem("token") || "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2E1ZDZkNDBhZDk0YjY3Y2VhNjAzYmYiLCJpYXQiOjE3Mzg5MjM3NjgsImV4cCI6MTc0MTUxNTc2OH0.uWv8xC8bmH2yYTh6tbmhY2dMKBj67aKT7JThySEzbzo"
    const [token, setToken] = useState(initialToken);
  
    const fetchAttendance = async (range) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/attendance/user?range=${range}`, {
                method: "GET",
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                console.error("Failed to fetch attendance data");
                return null;
            }
        } catch (error) {
            console.error("Error fetching attendance data:", error);
            return null;
        }
    };

    return (
        <AuthContext.Provider value={{ token, setToken, fetchAttendance }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
