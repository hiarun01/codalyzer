import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import NotFound from "./components/pages/NotFound";
import LoginWithGoogle from "./components/auth/LoginWithGoogle";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {useState} from "react";
import RefreshHandler from "./components/RefreshHandler";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        <LoginWithGoogle />
      </GoogleOAuthProvider>
    );
  };

  const ProtectedRoute = ({children}) => {
    return isAuth ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <RefreshHandler setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
