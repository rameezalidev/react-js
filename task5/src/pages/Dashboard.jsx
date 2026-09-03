import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome! You have successfully accessed a protected route.</p>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}