import { Routes, Route } from 'react-router-dom';
import { OpenRoutes } from './openRoutes';
import { PrivateRoutes } from './privateRoutes';
import { SignUp } from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';
import { Dashboard } from '../pages/Dashboard';
import { Team } from '../pages/Team';
import { PokemonDetails } from '../pages/PokemonDetails';

export function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <OpenRoutes>
            <SignIn />
          </OpenRoutes>
        }
      />
      <Route
        path="/register"
        element={
          <OpenRoutes>
            <SignUp />
          </OpenRoutes>
        }
      />

      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/pokemon/:name"
        element={
          <PrivateRoutes>
            <PokemonDetails />
          </PrivateRoutes>
        }
      />
      <Route
        path="/team"
        element={
          <PrivateRoutes>
            <Team />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}
