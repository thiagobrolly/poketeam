import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { GlobalStyle } from './styles/global';
import { CustomThemeProvider } from './contexts/ThemeContext';
import { QueryClient, QueryClientProvider } from 'react-query';

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <MainRoutes />
            <GlobalStyle />
          </BrowserRouter>
        </AuthProvider>
      </CustomThemeProvider>
    </QueryClientProvider>
  );
}
