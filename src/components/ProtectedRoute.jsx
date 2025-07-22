import { Navigate, Outlet } from 'react-router-dom';
import { useLogin } from './navbar/LoginContext';

/**
 * Renders <Outlet /> (the nested route) only if logged in.
 * Otherwise redirects to /login.
 */
const ProtectedRoute = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
