import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Quiz from './routes/Quiz';
import LeaderboardPage from './routes/Leaderboard';
import Profile from './routes/Profile';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <main>
      <Navbar />
      <AuthForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:category" element={<Quiz />} />
        <Route path="/leaderboard/:period" element={<LeaderboardPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  );
}
export default App;
