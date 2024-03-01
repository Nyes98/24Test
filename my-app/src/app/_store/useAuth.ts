import { create } from 'zustand';

interface AuthState {
    loginId: string;
    loginPassword: string;
}

interface AuthActions {
    login: () => void;
}

const useAuth = create<AuthState & AuthActions>((set) => ({
    loginId: '',
    loginPassword: '',
    login: () => set((state) => ({ loginId: state.loginId + 1 })),
}));

export default useAuth;
