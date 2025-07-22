import { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const AuthToggle = () => {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <LoginPage switchToSignup={() => setIsLogin(false)} />
  ) : (
    <SignupPage switchToLogin={() => setIsLogin(true)} />
  );
};

export default AuthToggle;
