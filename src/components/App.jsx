import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { Phonebook } from '../pages/Phonebook/Phonebook';
// import { HomePage } from '../pages/HomePage/HomePage';
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';
import { Layout } from './Layout/Layout';
import { selectIsRefreshing } from '../redux/auth/authSelectors';
import { RestrictedRouts } from './RestrictedRouts';
import { PrivateRouts } from './PrivateRouts';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRouts component={Register} redirectTo="/phonebook" />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRouts component={Login} redirectTo="/phonebook" />
            }
          />

          <Route
            path="/phonebook"
            element={<PrivateRouts component={Phonebook} redirectTo="/login" />}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    )
  );
};
