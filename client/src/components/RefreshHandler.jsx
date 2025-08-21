import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const RefreshHandler = ({setIsAuth}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem("user-info");
    const token = JSON.parse(data)?.token;

    if (token) {
      setIsAuth(true);
      if (location.pathname === "/login") {
        navigate("/dashboard");
      }
    }
  }, [location, navigate, setIsAuth]);

  return null;
};

export default RefreshHandler;
