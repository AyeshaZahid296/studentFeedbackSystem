import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import FeedbackForm from './pages/User/FormFeedback';
import ThankYou from './pages/User/ThankYou';
import Dashboard from './pages/Admin/Dashboard';
import PrivateRoutes from './routes/PrivateRoute';
import UserProvider, { UserContext } from './context/userContext';

const App = () => {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
};

export default App;

// Separate component so we can access context cleanly
const AppRoutes = () => {
  const { loading } = useContext(UserContext);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoutes allowedRoles={['admin']}>
              <Dashboard />
            </PrivateRoutes>
          }
        />

        {/* Optional Redirect Based on Role */}
        <Route path="/home" element={<RootRedirect />} />
      </Routes>
    </Router>
  );
};

const RootRedirect = () => {
  const { user } = useContext(UserContext);
  if (!user) return <Navigate to="/login" replace />;
  return user.role === 'admin'
    ? <Navigate to="/admin/dashboard" replace />
    : <Navigate to="/" replace />;
};
