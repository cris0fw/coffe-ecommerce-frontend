import Image from "next/image";
import React from "react";

const CusatomBrn = ({
  title,
  btnType,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
}) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={containerStyles}
      onClick={handleClick}
    >
      <span className={textStyles}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            sizes="300px"
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CusatomBrn;
