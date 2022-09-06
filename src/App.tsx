import React, { useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyle } from '../src/styles/global'
import Router from './routes'

export const AppThemeContext = createContext({} as any);

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <AppThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <div className="App">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </div>
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}

export default App;
