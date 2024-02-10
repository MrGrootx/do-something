import { useState } from "react";
import "./index.css";
import { useEffect } from "react";
import Posts from "./components/Posts";
import { Pagination } from "./components/Pagination";

// https://jsonplaceholder.typicode.com/posts
export default function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPost(data);
      setLoading(false);
    };

    fetchPost();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pagenumber) => setCurrentPage(pagenumber);

  return (
    <div className="m-4">
      <h1 className=" text-4xl text-center m-5 font-semibold text-red-600">
        Posts
      </h1>
      <Posts posts={currentPost} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalpost={post.length}
        paginate={paginate}
      />
    </div>
  );
}
