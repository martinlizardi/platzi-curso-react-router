import React from 'react';
import { Link } from 'react-router-dom';
import { blogdata } from '../../data/blogdata';

function BlogPage() {
  return (
    <>
      <h1>BlogPage</h1>

      <ul>
        {blogdata.map((post) => (
          <BlogLink key={post.slug} {...{ post }} />
        ))}
      </ul>
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
