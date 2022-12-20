import React from 'react';
import { useBlog } from 'services/blog';
import { useUser } from 'services/user';

const Comment = ({ comment, blogSlug, position }) => {
  const { removeComment } = useBlog();
  const user = useUser();

  const deleteComment = () => {
    removeComment(blogSlug, position);
  };

  const canRemove = user.isAdmin || user.data?.username === comment.author;

  return (
    <li>
      <p style={{ fontWeight: 'bold' }}>
        {comment.author}
        {canRemove && (
          <span
            style={{ color: 'red', marginLeft: '8px', cursor: 'pointer' }}
            onClick={deleteComment}
          >
            X
          </span>
        )}
      </p>
      <p>{comment.content}</p>
    </li>
  );
};

export { Comment };
