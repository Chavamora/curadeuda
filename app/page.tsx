"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();
  return (
    <>
      {isSignedIn ? (
        redirect("/home")
      ) : (
        <>
          <div className="flex flex-col ">
            <UserButton afterSignOutUrl="/" />
            <Image
              className="mt-3 self-center"
              src="/cura_deuda.webp"
              width={250}
              height={100}
              alt="logo"
            ></Image>
            <Image
              className="self-center"
              alt="greet"
              src="https://cdn.prod.website-files.com/636da39452a747631cae26ac/6700756b3b34692d98bd894c_hero.webp"
              width={250}
              height={250}
            ></Image>
            <div className="mt-5 text-xl font-bold text-gray-300 w-[80%] self-start mx-auto justify-center text-center">
              Hacemos fácil lo que siempre ha sido complicado
            </div>
            <div className="mt-1 text-sm text-green-400 w-[80%] self-start mx-auto justify-center text-center">
              Liquidamos tus deudas hasta con un 70% de descuento{" "}
            </div>
            <div className="mt-5 w-full flex-col flex gap-2">
              <Link
                href="/auth/signup"
                className="w-[90%] self-center relative overflow-hidden bg-gradient-to-r from-[#087d5a] to-[#00ce88] text-white font-semibold py-3 px-6 rounded-md 
               transition-all duration-200 
               hover:shadow-md hover:scale-[1.02]
               active:scale-90
               focus:outline-none focus:ring-2 focus:ring-white
               shadow-sm text-center"
              >
                Regístrate
              </Link>

              <Link
                href="/auth/signin"
                className="w-[90%] self-center relative overflow-hidden bg-gradient-to-r from-[#087d5a] to-[#00ce88] text-white font-semibold py-3 px-6 rounded-md 
               transition-all duration-200 
               hover:shadow-md hover:scale-[1.02]
               active:scale-90
               focus:outline-none focus:ring-2 focus:ring-white
               shadow-sm text-center"
              >
                Inicia Sesión
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
