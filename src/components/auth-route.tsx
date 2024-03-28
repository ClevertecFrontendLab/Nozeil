import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import { useAuth } from '@hooks/use-auth';

type AuthRouteProps = {
    children: ReactNode;
};

export const AuthRoute = ({ children }: AuthRouteProps) => {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to={ROUTES.AUTH} />;
    }

    return children;
};
