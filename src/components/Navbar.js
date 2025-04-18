import { Link } from 'react-router-dom';
import { auth } from '../firebase';
export default function Navbar() {
  const handleLogout = () => auth.signOut();
  return (
    <nav>
      <Link to="/">Accueil</Link> | 
      <Link to="/profile">Profil</Link> 
      <button onClick={handleLogout}>Déconnexion</button>
    </nav>
  );
}