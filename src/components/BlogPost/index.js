import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogdata } from '../../data/blogdata';
import { useAuth } from '../../services/auth';
import { useUser } from '../../services/user';

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();
  const user = useUser();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const canDelete = () => {
    return auth.isLogged
      ? user.isAdmin || user.data.username === blogpost.author
      : false;
  };

  const returnToBlog = () => {
    navigate('/blog');
    // navigate(-1);
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canDelete() && <button>Eliminar blog</button>}
    </>
  );
}

export { BlogPost };
