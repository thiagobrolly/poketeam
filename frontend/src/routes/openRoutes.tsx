import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ReactNode } from 'react';

type OpenRoutesProps = {
  children: ReactNode;
};

export const OpenRoutes = ({ children }: OpenRoutesProps) => {
  const { signed } = useAuth();

  if (signed) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};
