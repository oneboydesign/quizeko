import { useEffect, useState } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
export default function Leaderboard() {
  const [daily, setDaily] = useState([]);
  const [weekly, setWeekly] = useState([]);
  const [monthly, setMonthly] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const dailySnapshot = await getDocs(query(collection(db, 'users'), orderBy('date', 'desc'), limit(10)));
      setDaily(dailySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      const weeklySnapshot = await getDocs(query(collection(db, 'users'), orderBy('week', 'desc'), limit(10)));
      setWeekly(weeklySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      const monthlySnapshot = await getDocs(query(collection(db, 'users'), orderBy('month', 'desc'), limit(10)));
      setMonthly(monthlySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>Journalier</h2><ul>{daily.map(u => <li key={u.id}>{u.username || 'Utilisateur'} - {u.date || 0}</li>)}</ul>
      <h2>Hebdomadaire</h2><ul>{weekly.map(u => <li key={u.id}>{u.username || 'Utilisateur'} - {u.week || 0}</li>)}</ul>
      <h2>Mensuel</h2><ul>{monthly.map(u => <li key={u.id}>{u.username || 'Utilisateur'} - {u.month || 0}</li>)}</ul>
    </div>
  );
}