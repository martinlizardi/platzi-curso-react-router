import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'services/user';
import { useBlog } from 'services/blog';

function CreateBlog() {
  const navigate = useNavigate();
  const blog = useBlog();
  const {
    data: { username },
  } = useUser();
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [slug, setSlug] = React.useState('');

  const create = (e) => {
    e.preventDefault();
    blog.create({
      title,
      slug,
      content,
      author: username,
      comments: [],
    });
    returnToBlog();
  };

  const returnToBlog = () => {
    navigate('/blog');
    // navigate(-1);
  };

  const isDisabled = !(title && content && slug);

  return (
    <>
      <h2>Create Blog</h2>
      <button onClick={returnToBlog}>Back to Blog</button>

      <form onSubmit={create}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Slug:
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </label>

        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>

        <button type="submit" disabled={isDisabled}>
          Create
        </button>
      </form>
    </>
  );
}

export { CreateBlog };
