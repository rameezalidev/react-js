import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(); // Set auth state to true
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login Page</h2>
      <button type="submit">Log In</button>
    </form>
  );
}