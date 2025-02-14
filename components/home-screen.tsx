import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { DebtCard } from "./debt-card";
import { useRef } from "react";

type Props = {
  user: string | null | undefined;
};

async function HomeScreen({ user }: Props) {
  const [debt, setDebt] = useState<any[]>([]);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      fetch("/api")
        .then((response) => response.json())
        .then((data) => {
          setDebt(Object.values(data));
        });
    }
  }, []);

  return (
    <>
      <div className="w-full flex-col items-center pt-12">
        <div className="w-full flex items-center justify-between  mb-4">
          <div>
            <p className="text-sm  text-gray-300 ">Welcome Back</p>
            <p className="text-xl font-bold text-gray-100">{user}</p>
          </div>

          <Image
            src="/cura_deuda_sm.png"
            width={64}
            height={64}
            alt="logo"
          ></Image>
        </div>
        {/* Search bar */}
        <div className="w-full relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Busca entre tus créditos"
            className="w-full pl-12 pr-4 py-4 bg-[#1E1E2D] rounded-xl border border-none
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
                           placeholder-gray-400 text-gray-100"
          />
        </div>
      </div>
      <div className="overflow-y-scroll no-scrollbar">
        {!debt
          ? "no hay deuda"
          : debt.map((element) =>
              element.map((d: any, index: any) => (
                <DebtCard
                  key={index}
                  creditor={d.creditor}
                  status={d.status}
                  totalAmount={d.totalAmount}
                  remaining={d.remaining}
                  interestRate={d.interestRate}
                  dueDate={d.dueDate}
                />
              ))
            )}
      </div>
    </>
  );
}

export default HomeScreen;
