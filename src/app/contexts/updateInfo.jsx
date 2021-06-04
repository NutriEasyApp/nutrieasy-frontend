import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signIn, signUp, pushNotificationRegister } from '../services/auth.js';
import api from '../services/api.js';

const UpdateInfoContext = createContext({});

export const UpdateInfoProvider = ({ children }) => {
  const [update, setUpdate] = useState(false);

  async function updateInfo() {
    setUpdate(!update);
  }

  return (
    <UpdateInfoContext.Provider
      value={{
        update,
        updateInfo,
      }}
    >
      {children}
    </UpdateInfoContext.Provider>
  );
};

export default UpdateInfoContext;
