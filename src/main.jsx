import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import THEME from "./styles/theme";
import { GlobalStyles } from "./styles/global";

import { Router } from './routes/index';
import { AuthProvider } from "./hooks/authHookProvider";
import { OrderProvider } from "./hooks/orderHookProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <AuthProvider>
        <OrderProvider>
          <Router />
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
