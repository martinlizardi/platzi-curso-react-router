import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useBlog } from '../../services/blog';

function BlogPage() {
  const { blogs } = useBlog();

  return (
    <>
      <h1>BlogPage</h1>

      <ul>
        {blogs.map((post) => (
          <BlogLink key={post.slug} {...{ post }} />
        ))}
      </ul>

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
