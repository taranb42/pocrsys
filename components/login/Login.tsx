import { useState, ChangeEvent, FormEvent } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import { getToken } from "../utils/utils";

const fetchData = async (url: string, options: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

const login = async (email: string, password: string) => {
  const url = "http://localhost:3002/api/auth/login";
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };
  return fetchData(url, options);
};

const forgotPassword = async (email: string) => {
  const url = "/api/forgotPassword";
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  };
  return fetchData(url, options);
};

const Login: React.FC = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleForgotPasswordSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      await forgotPassword(forgotPasswordEmail);
      setShowForgotPassword(false);
      setForgotPasswordEmail("");
      alert("Password reset link sent. Check your email!");
    } catch (error) {
      alert("Failed to send reset link. Please try again later.");
    }
  };

  const loginuser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await login(data.email, data.password);
      console.log(response);

      Cookies.set("userToken", response?.authToken, { expires: 7 });
      router.push("/news");
    } catch (error) {
      alert("Login failed. Check your credentials and try again.");
    }
  };

  return (
    <section
      className="flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('/logo11.png')" }}
    >
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-center text-red-900">
          {getToken() ? "Welcome Back!" : "Login to Your Account"}
        </h2>
        {!getToken() && (
          <>
            <p className="text-sm text-gray-500 text-center">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
            <form onSubmit={loginuser} className="mt-6 space-y-4">
              <div className="col-span-6">
                <TextField
                  required
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <TextField
                  required
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-500 text-white py-3 text-sm font-medium hover:bg-blue-500"
              >
                Login
              </button>
            </form>
          </>
        )}

        <button
          type="button"
          className="w-full text-center rounded-lg bg-gray-200 text-gray-700 py-3 text-sm font-medium hover:bg-gray-300 mt-4"
          onClick={() => setShowForgotPassword(true)}
        >
          Forgot Password?
        </button>

        {showForgotPassword && (
          <form onSubmit={handleForgotPasswordSubmit} className="mt-4">
            <input
              type="email"
              name="forgotPasswordEmail"
              value={forgotPasswordEmail}
              onChange={(e) => setForgotPasswordEmail(e.target.value)}
              className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm placeholder-gray-500"
              placeholder="Enter your email"
              required
            />
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="rounded-lg bg-blue-500 text-white py-3 px-6 text-sm font-medium hover:bg-blue-600"
              >
                Send Reset Link
              </button>
              <button
                type="button"
                className="rounded-lg bg-gray-200 text-gray-700 py-3 px-6 text-sm font-medium hover:bg-gray-300"
                onClick={() => {
                  setShowForgotPassword(false);
                  setForgotPasswordEmail("");
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Login;
