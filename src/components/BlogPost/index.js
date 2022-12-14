import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogdata } from '../../data/blogdata';
import { useAuth } from '../../services/auth';

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const canDelete = () => {
    return auth.user?.isAdmin || auth.user?.username === blogpost.author;
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
