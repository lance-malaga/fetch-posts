import { useState, useEffect } from "react";
import Post from "./Post";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delayedFetch = () => {
      setTimeout(() => {
        const api_url = "https://jsonplaceholder.typicode.com/posts";

        async function getPosts() {
          const resp = await fetch(api_url);
          const data = await resp.json();
          setPosts(data);
        }

        getPosts();
        setLoading(false);
      }, 2000);
    };

    delayedFetch();
  }, []);

  return (
    <div className="post_container">
      {loading ? (
        <p>loading...</p>
      ) : (
        posts.map((a, index) => {
          return <Post key={a.userId} post={a} />;
        })
      )}
    </div>
  );
}
