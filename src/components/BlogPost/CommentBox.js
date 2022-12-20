import React from 'react';
import { useBlog } from 'services/blog';
import { useUser } from 'services/user';

const CommentBox = ({ blogSlug }) => {
  const { commentBlog } = useBlog();
  const { data: userData } = useUser();
  const [comment, setComment] = React.useState('');

  const saveComment = (e) => {
    e.preventDefault();
    commentBlog(blogSlug, {
      content: comment,
      author: userData.username,
    });
    setComment('');
  };

  return (
    <form onSubmit={saveComment}>
      <label>
        New comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit" disabled={!comment}>
          Comment
        </button>
      </label>
    </form>
  );
};

export { CommentBox };
