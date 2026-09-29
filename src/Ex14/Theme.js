import React from 'react';
import { themes, useTheme } from './ThemeContext';

function Theme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4 rounded" style={{ backgroundColor: theme.background, color: theme.foreground }}>
      <p>Current theme: {theme === themes.light ? 'Light' : 'Dark'}</p>
      <button
        className="btn border"
        style={{ backgroundColor: theme.background, color: theme.foreground }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Theme;
