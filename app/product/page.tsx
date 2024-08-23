import Image from "next/image";
import shirt from "../../assets/t-shirts/Shirt.png";

export default function page() {
  return (
    <div className="flex gap-16 justify-center">
      <div className="w-[576px] h-[656px] bg-gradient-to-b from-[#1EA483] to-[#7465D4] rounded-xl flex items-center justify-center">
        <Image src={shirt} alt="" />
      </div>

      <div className=" mt-6 w-[520px] flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#C4C4CC] mb-4">
            Camiseta Beyond the Limits
          </h1>

          <p className="text-[#00B37E] text-3xl mb-10">R$ 79,90</p>

          <p className="text-[#C4C4CC] text-lg text-justify">
            Tempus fermentum eget lacus, quis ante. Potenti sit pharetra,
            ridiculus amet. Bibendum pretium arcu arcu eget viverra at metus
            donec hendrerit. Rhoncus, nunc, eu at ac. At massa, fermentum amet
            ornare cras tincidunt nunc tincidunt. Netus lorem nulla nulla mattis
            integer velit dictum proin nibh.
          </p>
        </div>

        <button className="bg-[#00875F] p-5 rounded-[8px] w-full">
          Colocar na sacola
        </button>
      </div>
    </div>
  );
}
