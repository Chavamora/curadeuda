import React from "react";
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";

function ProfileScreen() {
  const { user } = useUser();
  return (
    <div className="w-full flex-col justify-around items-center pt-12 space-y-5 text-white">
      <div>
        <p className="self-center justify-center text-center">
          {user?.username}
        </p>
        <img
          src={user?.imageUrl}
          className="self-center justify-center text-center mx-auto"
          alt="User image"
        />
      </div>

      <SignOutButton>
        <button
          className="w-full self-center justify-end relative overflow-hidden bg-gradient-to-r from-[#087d5a] to-[#00ce88] text-white font-semibold py-3 px-6 rounded-md 
               transition-all duration-200 
               hover:shadow-md hover:scale-[1.02]
               active:scale-90
               focus:outline-none focus:ring-2 focus:ring-white
               shadow-sm"
        ></button>
      </SignOutButton>
    </div>
  );
}

export default ProfileScreen;
