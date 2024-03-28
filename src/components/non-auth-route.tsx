import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import { useAuth } from '@hooks/use-auth';

type NonAuthRouteProps = {
    children: ReactNode;
};

export const NonAuthRoute = ({ children }: NonAuthRouteProps) => {
    const { token } = useAuth();

    if (token) {
        return <Navigate to={ROUTES.MAIN} />;
    }

    return children;
};
