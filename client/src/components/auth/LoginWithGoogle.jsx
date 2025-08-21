import {useGoogleLogin} from "@react-oauth/google";
import {GoogleAuth} from "../../api/api";
import {useNavigate} from "react-router-dom";
const LoginWithGoogle = () => {
  const navigate = useNavigate();
  const googleResponse = async (authResponse) => {
    try {
      if (authResponse && authResponse.code) {
        const response = await GoogleAuth(authResponse.code);
        const {email, name, picture} = response.data.user;
        const token = response.data.token;
        const obj = {email, name, picture, token};
        localStorage.setItem("user-info", JSON.stringify(obj));
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: googleResponse,
    onError: googleResponse,
    flow: "auth-code",
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center space-y-6">
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google Logo"
          className="w-16 h-16 mb-5"
        />

        <button
          onClick={googleLogin}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          Login With Google
        </button>
        <button
          onClick={() => navigate("/")}
          className=" text-blue-600  hover:underline"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default LoginWithGoogle;
