import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  const [posts, setPosts] = useState([]);
  const { id: userId } = useParams();
  console.log(userId);

  useEffect(() => {
    if (userId) {
      // Fetch posts for a specific user based on userId
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [userId]); // Dependency array includes userId

  return (
    <div>
      <h1>List of Posts</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Title:</strong> {post.title} <br />
            <strong>Body:</strong> {post.body}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Users;
