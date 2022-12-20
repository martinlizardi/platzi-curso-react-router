import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { ProfilePage } from './pages/ProfilePage';
import { BlogPost } from './components/BlogPost';
import { CreateBlog } from './components/CreateBlog';
import { LoginPage } from './pages/LoginPage';
import { LogoutPage } from './pages/LogoutPage';
import { AuthProvider, AuthRoute } from 'services/auth';
import { BlogProvider, BlogRoute } from 'services/blog';
import { UsersDBProvider } from 'services/usersDB';

function App() {
  return (
    <HashRouter>
      <UsersDBProvider>
        <AuthProvider>
          <Menu />

          <BlogProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/blog" element={<BlogPage />}>
                <Route
                  path=":slug"
                  element={
                    <BlogRoute>
                      <BlogPost />
                    </BlogRoute>
                  }
                />
                <Route path="create" element={<CreateBlog />} />
              </Route>

              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/logout"
                element={
                  <AuthRoute>
                    <LogoutPage />
                  </AuthRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <AuthRoute>
                    <ProfilePage />
                  </AuthRoute>
                }
              />
              <Route
                path="/profile/:slug"
                element={
                  <AuthRoute>
                    <ProfilePage />
                  </AuthRoute>
                }
              />

              <Route path="*" element={<p>Not found</p>} />
            </Routes>
          </BlogProvider>
        </AuthProvider>
      </UsersDBProvider>
    </HashRouter>
  );
}

export default App;
