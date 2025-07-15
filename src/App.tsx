import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';

type Page = 'landing' | 'login' | 'register' | 'dashboard' | 'admin';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [user, setUser] = useState<{ name: string; email: string; role: 'user' | 'admin' } | null>(null);

  const handleLogin = (email: string, password: string) => {
    // Mock authentication
    if (email === 'admin@vaultvision.com' && password === 'admin123') {
      setUser({ name: 'Admin', email, role: 'admin' });
      setCurrentPage('admin');
    } else {
      setUser({ name: 'Usuário', email, role: 'user' });
      setCurrentPage('dashboard');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case 'register':
        return <Register onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard user={user} onLogout={handleLogout} onNavigate={setCurrentPage} />;
      case 'admin':
        return <AdminPanel user={user} onLogout={handleLogout} onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {renderPage()}
    </div>
  );
}

export default App;