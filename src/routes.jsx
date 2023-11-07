import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import LoginPage from "./pages/login/login";
import NotFoundPage from "./pages/notFound/notFound";
import RegPage from "./pages/registration/registration";
import FavoritesPage from "./pages/favorites/favorites";
import CategoriesPage from "./pages/categories/categories";
import { ProtectedRoute } from "./components/protected-route/protected-route";


export function AppRoutes({user, onClick}) {
  
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <LoginPage onClick = {onClick} />
        }
      />
      <Route path="/registration" element={<RegPage />} />
      <Route
        path="/favorites"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <FavoritesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/categories/:id"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <CategoriesPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
