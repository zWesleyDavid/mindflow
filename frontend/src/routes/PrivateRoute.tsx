import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { JSX } from 'react';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};
