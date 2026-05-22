import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <button className="nav-button" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}