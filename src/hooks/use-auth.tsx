import { useContext } from 'react';
import { AuthContext } from '@components/auth/auth-context';

export const useAuth = () => useContext(AuthContext);
