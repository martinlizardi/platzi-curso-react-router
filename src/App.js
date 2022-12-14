import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './pages/Menu';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  return (
    <HashRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
