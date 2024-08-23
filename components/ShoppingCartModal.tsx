"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

import shirt from "../assets/t-shirts/Shirt.png";
import shirt1 from "../assets/t-shirts/Shirt-1.png";
import shirt2 from "../assets/t-shirts/Shirt-2.png";
import Image from "next/image";
import { Button } from "./ui/button";

export default function ShoppingCartModal() {
  const { cartCount, shouldDisplayCart, handleCartClick } = useShoppingCart();

  // console.log("items:", { cartCount });

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="bg-gray800 border-none shadow-black shadow-2xl p-12">
        <SheetHeader className="mt-4 flex items-start text-gray100">
          <SheetTitle className="text-xl">Sacola de compras</SheetTitle>
        </SheetHeader>

        {cartCount === 0 ? (
          <h1>Seu Carrinho está vazio!</h1>
        ) : (
          <div className="h-full flex flex-col justify-between pb-12">
            <div>
              <div className="mt-8 flex gap-5">
                <div className="w-[100px] bg-gradient-to-b from-[#1EA483] to-[#7465D4] rounded-[8px]">
                  <Image src={shirt} alt="" />
                </div>
                <div>
                  <h2 className="text-lg text-gray300 mb-1">
                    Camiseta Beyond the Limits
                  </h2>
                  <p className="text-lg">R$ 79,90</p>
                  <Button className="p-0 text-green500 font-bold text-base hover:text-green300">
                    Remover
                  </Button>
                </div>
              </div>

              <div className="mt-8 flex gap-5">
                <div className="w-[100px] bg-gradient-to-b from-[#1EA483] to-[#7465D4] rounded-[8px]">
                  <Image src={shirt1} alt="" />
                </div>
                <div>
                  <h2 className="text-lg text-gray300 mb-1">
                    Camiseta Beyond the Limits
                  </h2>
                  <p className="text-lg">R$ 79,90</p>
                  <Button className="p-0 text-green500 font-bold text-base hover:text-green300">
                    Remover
                  </Button>
                </div>
              </div>

              <div className="mt-8 flex gap-5">
                <div className="w-[100px] bg-gradient-to-b from-[#1EA483] to-[#7465D4] rounded-[8px]">
                  <Image src={shirt2} alt="" />
                </div>
                <div>
                  <h2 className="text-lg text-gray300 mb-1">
                    Camiseta Beyond the Limits
                  </h2>
                  <p className="text-lg">R$ 79,90</p>
                  <Button className="p-0 text-green500 font-bold text-base hover:text-green300">
                    Remover
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5">
                <p>
                  Total de items pelo{" "}
                  <span className="text-green300">cartCount</span>:{" "}
                  <span className="text-rose-500">{cartCount}</span> pq?? <br />
                  supposed to be 0.
                </p>
              </div>

              <div>
                <div className="flex justify-between text-gray300 text-base mb-2">
                  <p>Quantidade</p>
                  <span>3</span>
                </div>

                <div className="flex justify-between font-bold">
                  <p className="text-lg">Valor total</p>
                  <span className="text-2xl">R$ 270,00</span>
                </div>

                <Button className="bg-green500 w-full rounded-[8px] p-8 text-lg hover:bg-green300 mt-14">
                  Finalizar compra
                </Button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
