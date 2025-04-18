import { useEffect, useState } from 'react';
import { auth } from '../firebase';
export default function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => { auth.onAuthStateChanged(setUser); }, []);
  return <div>{user ? <>Connecté en tant que {user.email}</> : <>Veuillez vous connecter</>}</div>;
}