import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
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
    <div className=" p-10 w-fit mx-auto border-gray-400 border-2 rounded-xl bg-white">
      <h1 className="text-center my-3 font-bold">
        Please login to your account
      </h1>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col">
          <div className="flex mb-3 gap-2  place-content-even">
            <label className="flex-1">Email address:</label>
            <input
              className="bg-gray-200 indent-4 rounded-lg"
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

          <div className="flex mb-3 gap-2 place-content-even">
            <label className="flex-1">Password:</label>
            <input
              className="bg-gray-200 indent-4 rounded-lg"
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
          <div className="flex text-center gap-5 p-5">
            <Link
              className="flex-1 bg-gray-200 rounded-xl hover:bg-black hover:text-white transition-all py-1"
              href="/test/login"
              passHref
            >
              <div>Signup</div>
            </Link>
            <button
              className="flex-1 bg-gray-200 rounded-xl hover:bg-black hover:text-white transition-all py-1"
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
