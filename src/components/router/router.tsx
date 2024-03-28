import { Navigate, Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';
import { AppLayout } from '@components/app-layout/app-layout';
import { AuthProvider } from '@components/auth/auth-provider';
import { ChangePassword } from '@components/auth-page/auth-forms/change-password/change-password';
import { LoginForm } from '@components/auth-page/auth-forms/login-form/login-form';
import { RegistrationForm } from '@components/auth-page/auth-forms/registration-form';
import { AuthPageContent } from '@components/auth-page/auth-page-content/auth-page-content';
import { ErrorChangePassword } from '@components/auth-page/auth-result/error-change-password';
import { ErrorCheckEmail } from '@components/auth-page/auth-result/error-check-email';
import { ErrorCheckEmailNoExist } from '@components/auth-page/auth-result/error-check-email-no-exist';
import { ErrorLogin } from '@components/auth-page/auth-result/error-login';
import { ErrorRegistration } from '@components/auth-page/auth-result/error-registration';
import { ErrorUserExist } from '@components/auth-page/auth-result/error-user-exist';
import { ForgotPasswordRoute } from '@components/auth-page/auth-result/forgot-password-route';
import { SuccessChangePassword } from '@components/auth-page/auth-result/success-change-password';
import { SuccessRegistration } from '@components/auth-page/auth-result/success-registration';
import { ConfirmEmail } from '@components/auth-page/confirm-email/confirm-email';
import { AuthRoute } from '@components/auth-route';
import { CheckGoogleAuthRoute } from '@components/check-google-auth-route';
import { Loader } from '@components/loader/loader';
import { NonAuthRoute } from '@components/non-auth-route';
import { PageLayout } from '@components/page-layout/page-layout';
import { COMPOUND_ROUTES, ROUTES } from '@constants/routes';
import { useIsLoading } from '@hooks/use-is-loading';
import { AuthPage } from '@pages/auth/auth';
import { CalendarPage } from '@pages/calendar-page/calendar-page';
import { FeedbacksPage } from '@pages/feedbacks-page';
import { MainPage } from '@pages/main-page';
import { NotFoundPage } from '@pages/not-found-page/not-found-page';
import { ProfilePage } from '@pages/profile-page/profile-page';
import { SettingsPage } from '@pages/settings-page/settings-page';
import { history } from '@redux/configure-store';

const routes = (
    <Routes>
        <Route element={<AppLayout />}>
            <Route
                element={
                    <NonAuthRoute>
                        <AuthPage />
                    </NonAuthRoute>
                }
            >
                <Route path={ROUTES.AUTH}>
                    <Route element={<AuthPageContent />}>
                        <Route index={true} element={<LoginForm />} />
                        <Route path={ROUTES.REGISTRATION} element={<RegistrationForm />} />
                    </Route>
                    <Route
                        path={ROUTES.CONFIRM_EMAIL}
                        element={
                            <ForgotPasswordRoute prevRoute={ROUTES.AUTH}>
                                <ConfirmEmail />
                            </ForgotPasswordRoute>
                        }
                    />
                    <Route
                        path={ROUTES.CHANGE_PASSWORD}
                        element={
                            <ForgotPasswordRoute prevRoute={COMPOUND_ROUTES.AUTH_CONFIRM_EMAIL}>
                                <ChangePassword />
                            </ForgotPasswordRoute>
                        }
                    />
                </Route>

                <Route path={ROUTES.RESULT}>
                    <Route path={ROUTES.ERROR_LOGIN} element={<ErrorLogin />} />
                    <Route path={ROUTES.SUCCESS_REGISTRATION} element={<SuccessRegistration />} />
                    <Route path={ROUTES.ERROR_USER_EXIST} element={<ErrorUserExist />} />
                    <Route path={ROUTES.ERROR_REGISTRATION} element={<ErrorRegistration />} />
                    <Route
                        path={ROUTES.ERROR_CHANGE_PASSWORD}
                        element={
                            <ForgotPasswordRoute
                                prevRoute={COMPOUND_ROUTES.AUTH_CHANGE_PASSWORD}
                                isErrorRoute={true}
                            >
                                <ErrorChangePassword />
                            </ForgotPasswordRoute>
                        }
                    />
                    <Route
                        path={ROUTES.SUCCESS_CHANGE_PASSWORD}
                        element={
                            <ForgotPasswordRoute prevRoute={COMPOUND_ROUTES.AUTH_CHANGE_PASSWORD}>
                                <SuccessChangePassword />
                            </ForgotPasswordRoute>
                        }
                    />
                    <Route
                        path={ROUTES.ERROR_CHECK_EMAIL_NO_EXIST}
                        element={
                            <ForgotPasswordRoute prevRoute={ROUTES.AUTH} isErrorRoute={true}>
                                <ErrorCheckEmailNoExist />
                            </ForgotPasswordRoute>
                        }
                    />
                    <Route
                        path={ROUTES.ERROR_CHECK_EMAIL}
                        element={
                            <ForgotPasswordRoute prevRoute={ROUTES.AUTH} isErrorRoute={true}>
                                <ErrorCheckEmail />
                            </ForgotPasswordRoute>
                        }
                    />
                </Route>
            </Route>

            <Route
                path={ROUTES.MAIN}
                element={
                    <AuthRoute>
                        <PageLayout />
                    </AuthRoute>
                }
            >
                <Route index={true} element={<MainPage />} />
            </Route>
            <Route
                path={ROUTES.FEEDBACKS}
                element={
                    <AuthRoute>
                        <PageLayout />
                    </AuthRoute>
                }
            >
                <Route index={true} element={<FeedbacksPage />} />
            </Route>
            <Route
                path={ROUTES.CALENDAR}
                element={
                    <AuthRoute>
                        <PageLayout />
                    </AuthRoute>
                }
            >
                <Route index={true} element={<CalendarPage />} />
            </Route>
            <Route
                path={ROUTES.PROFILE}
                element={
                    <AuthRoute>
                        <PageLayout />
                    </AuthRoute>
                }
            >
                <Route index={true} element={<ProfilePage />} />
            </Route>
            <Route
                path={ROUTES.SETTINGS}
                element={
                    <AuthRoute>
                        <PageLayout />
                    </AuthRoute>
                }
            >
                <Route index={true} element={<SettingsPage />} />
            </Route>
            <Route
                path={ROUTES.NOT_FOUND}
                element={
                    <AuthRoute>
                        <PageLayout />
                    </AuthRoute>
                }
            >
                <Route index={true} element={<NotFoundPage />} />
            </Route>
        </Route>
        <Route path='/' element={<CheckGoogleAuthRoute />} />
        <Route path='*' element={<Navigate to={ROUTES.NOT_FOUND} />} />
    </Routes>
);

export const Router = () => {
    const isLoading = useIsLoading();

    return (
        <AuthProvider>
            <HistoryRouter history={history}>{routes}</HistoryRouter>
            {isLoading && <Loader />}
        </AuthProvider>
    );
};
