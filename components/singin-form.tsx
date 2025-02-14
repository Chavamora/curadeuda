"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
interface SignInFormProps {
  signInWithEmail: ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => void;
  clerkError: string;
}

const SigninForm = ({ signInWithEmail, clerkError }: SignInFormProps) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Image
        className="mt-[4em] self-start ml-[-10]"
        src="/cura_deuda.png"
        width={250}
        height={100}
        alt="logo"
      ></Image>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
          };
          const email = target.email.value;
          const password = target.password.value;
          signInWithEmail({ emailAddress: email, password: password });
        }}
        className="space-y-3 flex flex-col w-[90%] mx-auto"
      >
        <p className="text-gray-100 text-xl font-bold">Sign in</p>

        <div>
          <label className="block text-sm font-medium text-gray-100 mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="bg-[#313141] text-white w-full px-4 py-3 border border-none rounded-md focus:ring-2 focus:ring-green-600 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-100 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="bg-[#313141] text-white w-full px-4 py-3 border border-none rounded-md focus:ring-2 focus:ring-green-600 outline-none pr-12"
              required
            />
            <button
              type="button"
              className="absolute top-3 right-3 text-sm text-gray-500 px-2 py-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <p className="self-end text-gray-300"> Forgot password </p>
        <h2 className="text-slate-700 mb-8">
          {clerkError && <p className="text-red-600">{clerkError}</p>}
        </h2>
        <button
          type="submit"
          className="w-full self-center relative overflow-hidden bg-gradient-to-r from-[#087d5a] to-[#00ce88] text-white font-semibold py-3 px-6 rounded-md 
               transition-all duration-200 
               hover:shadow-md hover:scale-[1.02]
               active:scale-90
               focus:outline-none focus:ring-2 focus:ring-white
               shadow-sm "
        >
          {loading ? "Loading..." : "Sign in"}
        </button>
        <p className="self-center text-sm text-gray-300">
          Don't have an account?
          <Link className="font-bold text-green-600" href="/auth/signup">
            {" "}
            Signup
          </Link>
        </p>
      </form>
    </>
  );
};

export default SigninForm;
