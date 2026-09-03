import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

function Navigation() {
  const { isLoggedIn, logout } = useAuth();
  
  return (
    <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
      <Link to="/">Login</Link>
      <Link to="/signup">Signup</Link>
      {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </nav>
  );
}