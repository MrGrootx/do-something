const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className="grid grid-cols-5 gap-3">
        {posts.map((post) => (
          <div
            className="
                  bg-gray-600 text-center rounded inline-block p-5"
            key={post.id}
          >
            <span className="bg-yellow-400 text-black px-3 py-1 rounded font-bold">
              User Id: {post.id}
            </span>
            <div className="text-xl font-bold">{post.title}</div>
            <div>
              <p className="mt-3">
                {post.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
