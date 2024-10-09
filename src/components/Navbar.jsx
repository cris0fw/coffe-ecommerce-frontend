"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BarraLateral from "./BarraLateral";
import useCart from "@/hooks/useCart";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { items } = useCart();

  return (
    <header className="w-full h-[80px] xl:fixed xl:top-0 xl:left-0 xl:z-20  bg-white  shadow-lg flex items-center justify-between px-6 py-2">
      <div className="relative w-[120px] h-[50px] ">
        <Image
          src="/logo.png"
          fill
          alt="logo image"
          className="object-contain"
          sizes="300px"
        />
      </div>

      <div className="hidden relative lg:flex lg:gap-5 lg:font-semibold lg:block">
        <Link href="/">Home</Link>
        <Link href="/acerca">Acerca de</Link>
        <Link href="/contacto">Contacto</Link>
        <Link href="/checkout">Tienda</Link>

        <Link href="/checkout" className="cursor-pointer">
          <div className="flex">
            <div className="relative w-[30px] h-[30px]">
              <Image
                src="/cart.png"
                fill
                alt="cart image"
                className="object-contain"
                sizes="300px"
              />
            </div>
            <span className="self-end bg-marron px-[5px] py-[1px] text-white rounded-md">
              {items.length}
            </span>
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-7 lg:hidden">
        <div className="flex">
          <div
            className="relative w-[25px] h-[25px]"
            onClick={() => setActive(true)}
          >
            <Image
              src="/cart.png"
              fill
              alt="cart image"
              className="object-contain"
            />
          </div>
          <span className="self-end mt-2">0</span>
        </div>

        <div
          className="relative w-[35px] h-[35px]"
          onClick={() => setActive(true)}
        >
          <Image
            src="/menu.png"
            fill
            alt="menu image"
            className="object-contain"
          />
        </div>
      </div>

      <BarraLateral active={active} setActive={setActive} />
    </header>
  );
};

export default Navbar;
