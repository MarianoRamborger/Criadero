import React from 'react';

export const ConfigContext = React.createContext({});

export function useConfig() {
  return React.useContext(ConfigContext);
}
