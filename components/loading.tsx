import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <Image
      className="my-auto animate-bounce"
      src="/cura_deuda_sm.png"
      width={64}
      height={64}
      alt="LOADING"
    ></Image>
  );
}

export default Loading;
