// store/authStore.js
import create from 'zustand';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
import { AnyPtrRecord } from 'dns';

const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  setUser: (user:any) => set({ user }),
  setLoading: (loading:any) => set({ loading }),

  initializeAuth: () => {
    set({ loading: true });
    onAuthStateChanged(auth, (user) => {
      set({ user, loading: false });
    });
  },
  logout: async () => {
    await signOut(auth);
    set({ user: null });
  },
}));

export default useAuthStore;
