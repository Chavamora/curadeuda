"use client";

import "./globals.css";
import { Wifi, BatteryMedium } from "lucide-react";
import { ClerkProvider } from "@clerk/nextjs";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="overflow-x-hidden  min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="overflow-x-hidden  relative w-[375px] h-[750px] bg-black rounded-[2rem] shadow-xl p-4">
              <div className="overflow-x-hidden overflow-y-scroll no-scrollbar pb-[55] w-full h-full bg-[#161622] rounded-[1.5rem]  flex flex-col items-center">
                <div className="h-10 overflow-x-hidden  w-full overflow-y-hidden bg-black px-4 py-3.5 flex items-center justify-between text-white text-xs">
                  <div className="overflow-x-hidden flex items-center space-x-2">
                    <span className="font-medium">9:41</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Wifi />
                    <BatteryMedium />
                  </div>
                </div>

                {children}
                {/* <div className="h-2 w-24 mx-auto mb-4 bg-gray-300 absolute rounded-full bottom-2 self-center hover:bottom-4 transition-all" /> */}
              </div>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
