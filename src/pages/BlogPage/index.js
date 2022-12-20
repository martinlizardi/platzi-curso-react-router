import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'services/auth';
import { useBlog } from 'services/blog';

function BlogPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { blogs } = useBlog();
  const { isLogged } = useAuth();

  return (
    <>
      <h1>BlogPage</h1>

      {isLogged ? (
        <button onClick={() => navigate('/blog/create')}>Add blog</button>
      ) : (
        <button
          onClick={() =>
            navigate('/login', { replace: true, state: { from: location } })
          }
        >
          Login to add a new blog
        </button>
      )}

      {blogs.length > 0 ? (
        <ul>
          {blogs.map((post) => (
            <BlogLink key={post.slug} {...{ post }} />
          ))}
        </ul>
      ) : (
        <p>Not blogs</p>
      )}

      <Outlet />
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export { BlogPage };
