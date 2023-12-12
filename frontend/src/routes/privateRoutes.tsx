import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ReactNode } from 'react';

type PrivateRoutesProps = {
  children: ReactNode;
};

export const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
  const { signed, isLoadingUserStorage } = useAuth();

  if (isLoadingUserStorage) {
    return <h1>Carregando</h1>;
  }

  if (!signed) {
    return <Navigate to="/" />;
  }

  return children;
};
