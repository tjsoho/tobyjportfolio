import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ContentPage from './components/ContentPage';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
     <ContentPage />
    </div>
    </ThemeProvider>
  );
}

export default App;
