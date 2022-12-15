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
        const blogsTemp = [...prevState];
        blogsTemp.splice(idx, 1);
        return blogsTemp;
      });
    }
  };

  const commentBlog = (blogSlug, comment) => {
    const idx = blogs.findIndex((blog) => blog.slug === blogSlug);
    if (idx >= 0) {
      setBlogs((prevState) => {
        const blogsTemp = [...prevState];
        const blog = blogsTemp[idx];
        const newComments = [...blog.comments, comment];
        blog.comments = newComments;
        blogsTemp[idx] = blog;
        return blogsTemp;
      });
    }
  };

  const removeComment = (blogSlug, position) => {
    const idx = blogs.findIndex((blog) => blog.slug === blogSlug);
    if (idx >= 0) {
      const blogsTemp = [...blogs];
      blogsTemp[idx].comments.splice(position, 1);
      setBlogs(blogsTemp);
    }
  };

  const value = {
    blogs,
    create,
    remove,
    commentBlog,
    removeComment,
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
