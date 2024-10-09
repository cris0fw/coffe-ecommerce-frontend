import Image from "next/image";
import React from "react";
import CusatomBrn from "./CusatomBrn";
import Link from "next/link";

const CardCafe = ({
  title,
  image,
  category,
  country,
  price,
  containerStyle,
  button,
  textStyles,
  categoryStyles,
  countryStyles,
  imageStyles,
  link,
  handleClick,
}) => {
  return (
    <div className={containerStyle}>
      <Link href={`/product/${link}`}>
        <div className={imageStyles}>
          <Image
            src={image}
            alt="image card coffie"
            fill
            className="object-cover xl:object-contain"
            sizes="300px"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-3 px-5">
        <h2 className={textStyles}>{title}</h2>

        <div className="flex justify-end gap-3">
          <p className={`${category ? `${categoryStyles}` : ""}`}>{category}</p>
          <p className={`${country ? `${countryStyles}` : ""}`}>{country}</p>
        </div>

        <p className="text-[20px] font-bold">
          <span className="ml-2">{price ? `${price} ARS` : ""}</span>
        </p>
      </div>
      <CusatomBrn
        containerStyles={`${
          button
            ? "px-6 py-3 bg-black flex flex-row-reverse justify-center items-center"
            : "hidden"
        }`}
        textStyles="text-white font-semibold text-sm ml-2"
        title="Añadir al carrito"
        rightIcon="/cartCoffie.png"
        handleClick={handleClick}
      />
    </div>
  );
};

export default CardCafe;
