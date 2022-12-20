import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from 'services/auth';
import { useUser } from 'services/user';
import { useBlog } from 'services/blog';
import { Comment } from './Comment';
import { CommentBox } from './CommentBox';

function BlogPost() {
  const navigate = useNavigate();
  const location = useLocation();
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
            <Comment
              comment={comment}
              blogSlug={blogpost.slug}
              position={idx}
              key={`${comment.author}-${idx}`}
            />
          ))}
        </ul>
      ) : (
        <p>Not comments.</p>
      )}

      {auth.isLogged ? (
        <CommentBox blogSlug={blogpost.slug} />
      ) : (
        <button
          onClick={() =>
            navigate('/login', { replace: true, state: { from: location } })
          }
        >
          Login to comment
        </button>
      )}
    </>
  );
}

export { BlogPost };
