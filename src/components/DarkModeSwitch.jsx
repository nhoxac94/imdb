'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { MdLightMode } from 'react-icons/md';

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode
            className='text-xl cursor-pointer hover:text-amber-500'
            onClick={() => setTheme('light')}
          />
        ) : (
          <BsFillMoonStarsFill
            className='text-xl cursor-pointer hover:text-amber-500'
            onClick={() => setTheme('dark')}
          />
        ))}
    </>
  );
};

export default DarkModeSwitch;
