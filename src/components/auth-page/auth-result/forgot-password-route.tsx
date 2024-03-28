import { type ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { routerSelector } from '@redux/router-selector';

type ForgotPasswordRouteProps = {
    children: ReactNode;
    isErrorRoute?: boolean;
    prevRoute: string;
};

export const ForgotPasswordRoute = ({
    children,
    prevRoute,
    isErrorRoute,
}: ForgotPasswordRouteProps) => {
    const router = useAppSelector(routerSelector);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (
            router.previousLocations?.at(-1)?.location?.pathname !== prevRoute &&
            router.location?.pathname === location.pathname
        ) {
            navigate(ROUTES.AUTH, { state: isErrorRoute && location.state });
        }
    }, [
        isErrorRoute,
        location.pathname,
        location.state,
        navigate,
        prevRoute,
        router.location,
        router.previousLocations,
    ]);

    return children;
};
