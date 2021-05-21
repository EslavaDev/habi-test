import { useState } from 'react';

export const useContainerTheme = () => {
  const [theme, setTheme] = useState('light'); // line B - setting the initial theme

  const switchTheme = value => setTheme(value);

  return {
    data: {
      theme,
    },
    mutations: {
      switchTheme,
    },
  };
};
