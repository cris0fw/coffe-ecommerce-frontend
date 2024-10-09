import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-black">
      <div className="w-full h-[35px] bg-marron"></div>
      <div className="w-[90%] max-w-[1440px] mx-auto py-3 flex flex-col items-center gap-3 ">
        <div className="text-white flex gap-3">
          <Link href="/">Home</Link>
          <Link href="/acerca">Acerca de</Link>
          <Link href="/tienda">Tienda</Link>
          <Link href="/contacto">Contacto</Link>
        </div>

        <p className="text-white">Cristian Ludueña</p>

        <div className="flex gap-3 xl:flex-row">
          <div className="relative w-[30px]  h-[30px]">
            <Image
              src="/instagram.png"
              alt="instagram icon"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[30px] h-[30px]">
            <Image
              src="/linkedin.png"
              alt="linkedin icon"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[30px] h-[30px]">
            <Image
              src="/github.png"
              alt="github icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="border-solid text-center border-t-[1px] border-t-white text-white">
        <p className="py-3 font-semibold text-sm xl:text-[20px]">
          @Hecho en next 14
        </p>
      </div>
    </footer>
  );
};

export default Footer;
