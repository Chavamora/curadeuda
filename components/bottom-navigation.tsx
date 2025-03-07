"use client";
import React from "react";
import { HomeIcon } from "lucide-react";
import { PlusCircleIcon } from "lucide-react";
import { UserIcon } from "lucide-react";
import { useState } from "react";
import HomeScreen from "./home-screen";
import CreateScreen from "./create-screen";
import ProfileScreen from "./profile-screen";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";

function BottomNavigation() {
  const user = useUser();
  const [activeTab, setActiveTab] = useState("home");

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen user={user.user?.username} />;
      case "Create":
        return <CreateScreen />;
      case "Profile":
        return <ProfileScreen />;

      default:
        return <HomeScreen user={user.user?.username} />;
    }
  };
  const handleClick = (section: string) => {
    setActiveTab(section);
  };
  return (
    <>
      <motion.div
        className="w-[90%]"
        key={activeTab}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.2 }}
      >
        {renderScreen()}
      </motion.div>

      <div className="overflow-x-hidden  overflow-y-scroll no-scrollbar bg-[#161622] absolute bottom-4 w-[91%] mt-auto border-t rounded-b-2xl opacity-100 border-gray-600 pt-3 pb-6">
        <nav className="flex justify-around items-center px-4">
          <button
            className={
              activeTab === "home"
                ? "flex flex-col items-center gap-1 text-green-600 transition-colors"
                : "flex flex-col items-center gap-1 text-gray-600 hover:text-green-600 transition-colors"
            }
            onClick={() => handleClick("home")}
          >
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </button>

          <button
            className={
              activeTab === "Create"
                ? "flex flex-col items-center gap-1 text-green-600 transition-colors"
                : "flex flex-col items-center gap-1 text-gray-600 hover:text-green-600 transition-colors"
            }
            onClick={() => handleClick("Create")}
          >
            <PlusCircleIcon className="w-6 h-6" />
            <span className="text-xs font-medium">Create</span>
          </button>

          <button
            className={
              activeTab === "Profile"
                ? "flex flex-col items-center gap-1 text-green-600 transition-colors"
                : "flex flex-col items-center gap-1 text-gray-600 hover:text-green-600 transition-colors"
            }
            onClick={() => handleClick("Profile")}
          >
            <UserIcon className="w-6 h-6" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </nav>
      </div>
    </>
  );
}

export default BottomNavigation;
