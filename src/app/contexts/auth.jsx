import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signIn } from '../services/auth.js';
import api from '../services/api.js';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      if (storagedUser && storagedToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

        setUser(storagedUser);
      }
      setLoading(false);
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
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }

  async function signOut() {
    setLoading(true);
    await AsyncStorage.clear();
    setUser(null);
    setLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, loading, setLoading, auth, signOut, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
