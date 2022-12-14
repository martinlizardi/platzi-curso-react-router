import React from 'react';
import { blogdata } from '../data/blogdata';

const BlogContext = React.createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = React.useState(blogdata);

  const value = {
    blogs,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

const useBlog = () => {
  return React.useContext(BlogContext);
};

export { BlogProvider, useBlog };
