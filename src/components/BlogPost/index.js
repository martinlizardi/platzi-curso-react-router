import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import { useUser } from '../../services/user';
import { useBlog } from '../../services/blog';
import { CommentBox } from './CommentBox';

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();
  const user = useUser();
  const { blogs, remove: removeBlog } = useBlog();

  const blogpost = blogs.find((post) => post.slug === slug);

  const canDelete = () => {
    return auth.isLogged
      ? user.isAdmin || user.data.username === blogpost.author
      : false;
  };

  const returnToBlog = () => {
    navigate('/blog');
    // navigate(-1);
  };

  const deleteBlog = () => {
    removeBlog(blogpost.slug);
    navigate('/blog');
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canDelete() && <button onClick={deleteBlog}>Eliminar blog</button>}

      <p>Comments</p>
      {blogpost.comments.length > 0 ? (
        <ul>
          {blogpost.comments.map((comment, idx) => (
            <li key={`${comment.author}-${idx}`}>
              <p style={{ fontWeight: 'bold' }}>{comment.author}</p>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Not comments.</p>
      )}

      {auth.isLogged && <CommentBox blogSlug={blogpost.slug} />}
    </>
  );
}

export { BlogPost };
