// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to
// navigate to different end points.
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
