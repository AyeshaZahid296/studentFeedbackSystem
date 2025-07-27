import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import FeedbackForm from './pages/User/FormFeedback';
import ThankYou from './pages/User/ThankYou';
import Dashboard from './pages/Admin/Dashboard';
import PrivateRoutes from './routes/PrivateRoute';
import UserProvider, { UserContext } from './context/userContext';
import Welcome from './pages/User/Welcome';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Welcome />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Admin Routes */}
          <Route element={<PrivateRoutes allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Route>

          {/* Redirect based on role */}
          <Route path="/home" element={<RootRedirect />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;

const RootRedirect = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/login" />;
  return user.role === 'admin'
    ? <Navigate to="/admin/dashboard" />
    : <Navigate to="/feedback" />;
};
