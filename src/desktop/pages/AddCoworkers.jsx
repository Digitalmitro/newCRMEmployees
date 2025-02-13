import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";

function AddCoworkers() {
  const [users, setUsers] = useState([]);
  const { getAllUsers } = useAuth();
  const allUsers = async () => {
    const user = await getAllUsers();
    setUsers(user);
  };
  useEffect(() => {
    allUsers();
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddCoworkers;
