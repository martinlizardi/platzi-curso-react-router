import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import { useBlog } from '../../services/blog';

function BlogPage() {
  const navigate = useNavigate();
  const { blogs } = useBlog();
  const { isLogged } = useAuth();

  return (
    <>
      <h1>BlogPage</h1>

      {isLogged && (
        <button onClick={() => navigate('/blog/create')}>Add post</button>
      )}

      {blogs.lenght > 0 ? (
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
