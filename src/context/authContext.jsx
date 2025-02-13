import { createContext, useContext, useState,useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialToken =localStorage.getItem("token") 
    const [userData, setUserData] = useState([]);
    const [token, setToken] = useState(initialToken);
 

    useEffect(() => {
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUserData(decoded);
            } catch (error) {
                console.error("Invalid token:", error);
                setUserData(null);
            }
        } else {
            setUserData(null);
        }

       
    }, []);

  

    const getAllUsers=async()=>{
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/auth/all`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
    
            if (response.ok) {
                const data = await response.json();
                return data?.users;
            }
        } catch (error) {
            console.error("Error fetching data:", error.message);
            return null;
        }
    }
    
    


    const fetchAttendance = async (range) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/attendance/user?range=${range}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
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
        <AuthContext.Provider value={{ token, setToken,userData, fetchAttendance,getAllUsers }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
