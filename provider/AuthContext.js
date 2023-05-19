import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get('/api/users/me');
        setUser(response.data);
      }
      setLoading(false);
    };
    getUser();
  }, []);

  const login = async () => {
    try {
      const authUrl = 'https://your-authentication-server.com/auth';
      const redirectUrl = AuthSession.makeRedirectUri({ useProxy: true });
      const result = await AuthSession.startAsync({
        authUrl: `${authUrl}?redirect_uri=${encodeURIComponent(redirectUrl)}`,
      });
      if (result.type === 'success') {
        const token = result.params.access_token;
        await AsyncStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get('/api/users/me');
        setUser(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setUser(null);
  };

  const authContextValue = {
    user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
