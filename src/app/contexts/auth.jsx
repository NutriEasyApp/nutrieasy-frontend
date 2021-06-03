import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signIn, signUp, pushNotificationRegister } from '../services/auth.js';
import api from '../services/api.js';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [errorRegister, setErrorRegister] = useState(false);
  const [routeName, setRouteName] = useState('SignIn');

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      if (storagedUser && storagedToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

        setUser(storagedUser);
      }
      setLoading(false);
      setRouteName('SignIn');
    }
    loadStoragedData();
  }, []);

  async function auth(email, password) {
    try {
      setLoading(true);
      const response = await signIn(email, password);
      const { token, user } = response.data;
      setUser(user);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      await AsyncStorage.setItem('@RNAuth:user', user);
      await AsyncStorage.setItem('@RNAuth:token', token);

      setLoading(false);
      setRouteName('SignIn');
    } catch (e) {
      setError(true);
      setLoading(false);
      setRouteName('SignIn');
    }
  }

  async function register(email, username, password) {
    try {
      setLoading(true);
      const response = await signUp(email, username, password);
      const { token, user } = response.data;
      setUser(user);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      await AsyncStorage.setItem('@RNAuth:user', user);
      await AsyncStorage.setItem('@RNAuth:token', token);

      const pushNotificationToken = await AsyncStorage.getItem(
        '@PushNotificationToken:token'
      );
      await pushNotificationRegister({ email, pushNotificationToken });
      setLoading(false);
      setRouteName('SignIn');
    } catch (e) {
      setLoading(false);
      setErrorRegister(true);
      setRouteName('SignUp');
    }
  }

  async function signOut() {
    setLoading(true);
    await AsyncStorage.clear();
    setUser(null);
    setLoading(false);
    setRouteName('SignIn');
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loading,
        setLoading,
        auth,
        register,
        signOut,
        error,
        setError,
        errorRegister,
        routeName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
