"use client";

import Image from "next/image";

import logo from "../assets/logo.svg";
import { Button } from "./ui/button";
import { Handbag } from "@phosphor-icons/react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex justify-between w-[1200px]">
        <Link href={"/"}>
          <Image src={logo} alt="" />
        </Link>

        <Button className="bg-[#202024] rounded-[6px] w-12 h-12 p-0 hover:bg-[#37373b]">
          <Handbag weight="bold" size={24} color="#8D8D99" />
          <div className="h-6 w-6 bg-[#00875F] rounded-full flex items-center justify-center mt-[-100%] mr-[-50%] outline-4  outline outline-[#121212]">
            3
          </div>
        </Button>
      </div>
    </div>
  );
}
