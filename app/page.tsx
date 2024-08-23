"use client";

import shirt from "../assets/t-shirts/Shirt.png";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Handbag } from "@phosphor-icons/react";
import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 40,
      origin: "auto",
    },
  });

  // async function loadData() {
  //   const response = await stripe.products.list();
  //   console.log(response.data);
  // }

  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <div className="flex items-center">
      <div ref={sliderRef} className="keen-slider">
        <Link className="keen-slider__slide" href="/product">
          <div className="h-[656px] bg-gradient-to-b from-[#1EA483] to-[#7465D4] rounded-xl flex items-center justify-center relative">
            <Image src={shirt} alt="" width={520} height={480} />
            <div className="bg-[#202024]/90 absolute bottom-1 left-1 right-1 p-8 rounded-[8px] flex items-center justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="text-gray-200 font-bold text-lg leading-none">
                  Camiseta Beyond the Limits
                </h2>
                <p className="text-green300 font-bold text-2xl leading-none">
                  R$ 79,90
                </p>
              </div>
              <Button className="bg-green500 rounded-[6px] w-14 h-14 p-0 hover:bg-green300">
                <Handbag weight="bold" size={28} color="#fff" />
              </Button>
            </div>
          </div>
        </Link>

        <Link className="keen-slider__slide" href="/product">
          <div className="h-[656px] bg-gradient-to-b from-[#1EA483] to-[#7465D4] rounded-xl flex items-center justify-center relative">
            <Image src={shirt} alt="" width={520} height={480} />
            <div className="bg-[#202024]/90 absolute bottom-1 left-1 right-1 p-8 rounded-[8px] flex items-center justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="text-gray-200 font-bold text-lg leading-none">
                  Camiseta Beyond the Limits
                </h2>
                <p className="text-green300 font-bold text-2xl leading-none">
                  R$ 79,90
                </p>
              </div>
              <Button className="bg-green500 rounded-[6px] w-14 h-14 p-0 hover:bg-green300">
                <Handbag weight="bold" size={28} color="#fff" />
              </Button>
            </div>
          </div>
        </Link>

        <Link className="keen-slider__slide" href="/product">
          <div className="h-[656px] bg-gradient-to-b from-[#1EA483] to-[#7465D4] rounded-xl flex items-center justify-center relative">
            <Image src={shirt} alt="" width={520} height={480} />
            <div className="bg-[#202024]/90 absolute bottom-1 left-1 right-1 p-8 rounded-[8px] flex items-center justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="text-gray-200 font-bold text-lg leading-none">
                  Camiseta Beyond the Limits
                </h2>
                <p className="text-green300 font-bold text-2xl leading-none">
                  R$ 79,90
                </p>
              </div>
              <Button className="bg-green500 rounded-[6px] w-14 h-14 p-0 hover:bg-green300">
                <Handbag weight="bold" size={28} color="#fff" />
              </Button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await stripe.products.list();

//   console.log(response.data);

//   return {
//     props: {
//       list: [1, 2, 3],
//     },
//   };
// };
