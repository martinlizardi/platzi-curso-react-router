import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { blogdata } from '../data/blogdata';

const BlogContext = React.createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = React.useState(blogdata);

  const create = (blog) => {
    setBlogs((prevState) => [blog, ...prevState]);
  };

  const remove = (slug) => {
    const idx = blogs.findIndex((blog) => blog.slug === slug);

    if (idx >= 0) {
      setBlogs((prevState) => {
        prevState.splice(idx, 1);
        return prevState;
      });
    }
  };

  const value = {
    blogs,
    create,
    remove,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

const useBlog = () => {
  return React.useContext(BlogContext);
};

function BlogRoute(props) {
  const { blogs } = React.useContext(BlogContext);
  const { slug } = useParams();

  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return <Navigate to="/not-found" />;
  }

  return props.children;
}

export { BlogProvider, useBlog, BlogRoute };
