import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import LoginPage from "./pages/login/login";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
