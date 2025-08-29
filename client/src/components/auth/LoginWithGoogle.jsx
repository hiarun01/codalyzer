import {useGoogleLogin} from "@react-oauth/google";
import {GoogleAuth} from "../../api/api";
import {useNavigate} from "react-router-dom";
import {Button} from "../ui/button";
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
      <div className="bg-[#111010] rounded-xl shadow-md border p-8 flex flex-col items-center space-y-2">
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google Logo"
          className="w-16 h-16 mb-5 rounded-full "
        />

        <Button
          onClick={googleLogin}
          variant="outline"
          className="text-white hover:bg-red-600 hover:border-red-600 cursor-pointer"
        >
          Login With Google
        </Button>
        <Button
          variant="link"
          onClick={() => navigate("/")}
          className=" text-[#EDEDED] hover:underline cursor-pointer"
        >
          Go to Home Page
        </Button>
      </div>
    </div>
  );
};

export default LoginWithGoogle;
