'use client'
import { useRouter } from 'next/navigation';
import useAuthStore from '../store/store';
import { useEffect } from 'react';
import { ReactNode, ReactElement } from 'react';
interface ProtectedRouteProps {
  children: ReactElement; // Ensure children is typed as ReactElement
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }): ReactElement | null => {
  const router = useRouter();
  const { user, loading, logout } = useAuthStore((state:any) => ({
    user: state.user,
    loading: state.loading,
    logout: state.logout,
  }));

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (typeof window === 'undefined') {
    return null; // Avoid using router on the server
  }

  if (loading) {
    return <div>Loading...</div>;
  }
 
  return user ? children : null;
};

export default ProtectedRoute;
