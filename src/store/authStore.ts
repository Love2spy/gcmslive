import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, LoginCredentials, RegisterData } from '../types/auth';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (credentials) => {
        // In production, this would make an API call
        const user: User = {
          id: crypto.randomUUID(),
          email: credentials.email,
          name: credentials.email.split('@')[0],
          company: 'My Company',
          role: 'user'
        };
        
        set({ user, isAuthenticated: true });
      },

      register: async (data) => {
        // In production, this would make an API call
        const user: User = {
          id: crypto.randomUUID(),
          email: data.email,
          name: data.name,
          company: data.company,
          role: 'user'
        };
        
        set({ user, isAuthenticated: true });
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      }
    }),
    {
      name: 'auth-storage'
    }
  )
);