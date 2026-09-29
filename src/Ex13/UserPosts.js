import React, { useEffect, useState } from 'react';

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };
    fetchData();
  }, [userId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="border rounded p-2 mb-2">
          <h5>{post.title}</h5>
          <p className="mb-0">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default UserPosts;
