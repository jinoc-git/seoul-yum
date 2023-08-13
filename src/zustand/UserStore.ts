import { message } from 'antd';
import { signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { create } from 'zustand';
import { auth } from '../firebase/firebaseConfig';

export type UserInfo = {
  displayName: string;
  photoURL: string;
  email: string;
  id: string;
};

type UserState = {
  user: UserInfo | null;
  isLoggedIn: boolean;
  setupAuthObserver: () => () => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUserInfo: (userInfo: UserInfo) => void;
};

export const useUserStore = create<UserState>((set) => {
  const setupAuthObserver = () => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const userInfo: UserInfo = {
          displayName: user.displayName!,
          photoURL: user.photoURL!,
          email: user.email!,
          id: user.uid,
        };
        set({ user: userInfo, isLoggedIn: true });
      } else {
        set({ user: null, isLoggedIn: false });
      }
    });
  };

  const refreshUserInfo = (userInfo: UserInfo) => {
    if (auth.currentUser) {
      updateProfile(auth.currentUser, userInfo);
    }
    set((state) => ({ user: { ...state.user, ...userInfo }, isLoggedIn: true }));
  };

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      message.success('로그아웃되었습니다');
    } catch (error) {
      message.error('로그아웃 중 오류가 발생했습니다');
    }
  };

  return {
    user: null,
    isLoggedIn: false,
    setupAuthObserver,
    login,
    logout,
    refreshUserInfo,
  };
});
