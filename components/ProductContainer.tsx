import Image from "next/image";
import React from "react";

import shirt from "../assets/t-shirts/Shirt.png";
import Link from "next/link";

export default function ProductContainer() {
  return (
    <Link href="/product">
      <div className="h-[656px] w-[696px] bg-gradient-to-b from-[#1EA483] to-[#7465D4] rounded-xl flex items-center justify-center relative">
        <Image src={shirt} alt="" width={520} height={480} />
        <div className="bg-[#202024]/90 absolute bottom-1 left-1 right-1 p-8 rounded-[8px] flex items-center justify-between">
          <h2 className="text-gray-200 font-bold text-lg leading-none">
            Camiseta Beyond the Limits
          </h2>
          <p className="text-emerald-500 font-bold text-2xl">R$ 79,90</p>
        </div>
      </div>
    </Link>
  );
}
