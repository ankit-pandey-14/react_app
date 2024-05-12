import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

// importing the screen using Lazy Loading
const SignUpScreen = React.lazy(() => import('../screens/SignUpScreen'));
const LoginScreen = React.lazy(() => import('../screens/LoginScreen'));

const GuestRoutes = () => {
    return (
        <React.Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path={ROUTES.HOME} element={<LoginScreen />} />
                <Route path={ROUTES.LOGIN} element={<LoginScreen />} />
                <Route path={ROUTES.SIGNUP} element={<SignUpScreen />} />
                <Route path='*' element={<Navigate to={ROUTES.HOME} replace={true} />} />
            </Routes>
        </React.Suspense>
    );
}

export default GuestRoutes;