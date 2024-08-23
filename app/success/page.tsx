import Image from "next/image";

import shirt1 from "../../assets/t-shirts/Shirt-1.png";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex items-center justify-center mt-[150px]">
      <div className="flex flex-col gap-12">
        <div className="flex justify-center">
          <div className="bg-gradient-to-b from-[#1EA483] to-[#7465D4] rounded-full w-36">
            <Image src={shirt1} alt="" />
          </div>

          <div className="bg-gradient-to-b from-[#1EA483] to-[#7465D4] rounded-full w-36 ml-[-50px] shadow-black shadow-2xl">
            <Image src={shirt1} alt="" />
          </div>

          <div className="bg-gradient-to-b from-[#1EA483] to-[#7465D4] rounded-full w-36 ml-[-50px] shadow-black shadow-2xl">
            <Image src={shirt1} alt="" />
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-[590px]">
          <h1 className="text-center mb-6 text-3xl text-gray100 font-bold">
            Compra efetuada!
          </h1>
          <p className="text-gray300 text-xl text-center">
            Uhuul <strong className="text-gray100">Diego Fernandes</strong>, sua
            compra de 3 camisetas já está a caminho da sua casa.
          </p>

          <Link href={"/"} className="text-center mt-16 text-green300 font-bold">Voltar ao catálogo</Link>
        </div>
      </div>
    </div>
  );
}
