import Image from "next/image";
import Link from "next/link";
import React from "react";
import CusatomBrn from "./CusatomBrn";
import { useRouter } from "next/navigation";

const BarraLateral = ({ active, setActive }) => {
  const router = useRouter();

  const handleAcerca = () => {
    setActive(false);
    router.push("/acerca");
  };

  const handleContacto = () => {
    setActive(false);
    router.push("/contacto");
  };

  const handleTienda = () => {
    setActive(false);
    router.push("/tienda");
  };

  return (
    <div
      className={`w-full h-screen bg-white fixed top-0 left-0 z-20 ${
        active ? "block" : "hidden"
      } md:w-[40%]`}
    >
      <div className="absolute top-5 right-7">
        <div
          className="relative w-[35px] h-[35px] lg:hidden"
          onClick={() => setActive(false)}
        >
          <Image
            src="/close.png"
            fill
            alt="close image"
            className="object-contain"
          />
        </div>
      </div>
      <div className="mt-20">
        <div className="link-hover">
          <Link href="/">Home</Link>
        </div>
        <div className="link-hover">
          <CusatomBrn
            title="Acerca de"
            textStyles="link-hover"
            handleClick={handleAcerca}
          />
        </div>
        <div className="link-hover">
          <CusatomBrn
            title="Contacto"
            textStyles="link-hover"
            handleClick={handleContacto}
          />
        </div>
        <div className="link-hover">
          <CusatomBrn
            title="Contacto"
            textStyles="link-hover"
            handleClick={handleTienda}
          />
        </div>
      </div>
    </div>
  );
};

export default BarraLateral;
