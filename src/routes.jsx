import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import LoginPage from "./pages/login/login";
import NotFoundPage from "./pages/notFound/notFound";
import RegPage from "./pages/registration/registration";
import FavoritesPage from "./pages/favorites/favorites";
import CategoriesPage from "./pages/categories/categories";
import { ProtectedRoute } from "./components/protected-route/protected-route";

export function AppRoutes({ user, onClick, tracks, load }) {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<MainPage load={load} tracks={tracks} />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/categories/:id" element={<CategoriesPage />} />
      </Route>
      <Route path="/login" element={<LoginPage onClick={onClick} />} />
      <Route path="/registration" element={<RegPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
