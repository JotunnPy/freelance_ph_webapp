import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    console.log(user);
    try {
      await login(data.email, data.password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-96 p-7">
      <h1 className="text-center mb-9 font-bold text-lg">
        Please login to your account
      </h1>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col">
          <div className="flex mb-3 gap-1  place-content-even items-center">
            <label className="flex-1">Email address:</label>
            <input
              className="bg-gray-200 indent-4 rounded-lg p-1"
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
              required
              type="email"
              placeholder="Enter email"
            />
          </div>

          <div className="flex mb-3 gap-2 place-content-even items-center">
            <label className="flex-1">Password:</label>
            <input
              className="bg-gray-200 indent-4 rounded-lg p-1 "
              onChange={(e: any) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              required
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex text-center gap-5 p-5 mt-3">
            <Link
              className="flex-1 bg-black text-white rounded-xl hover:bg-gray-200 hover:text-black transition-all py-1"
              href="/sign_up"
              passHref
            >
              <div>Signup</div>
            </Link>
            <button
              className="flex-1 bg-black text-white rounded-xl hover:bg-gray-200 hover:text-black transition-all py-1"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
