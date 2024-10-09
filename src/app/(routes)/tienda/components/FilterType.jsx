import React from "react";
import { tipo } from "@/utils/article";

const FilterType = () => {
  return (
    <div className="mt-5">
      <h2 className="text-[18px] lg:text-[15px] font-semibold">Tipo</h2>

      {tipo.map((type) => {
        return (
          <div key={type.name} className="flex gap-2 items-center">
            <input type="radio" value={type.value} name={type.value} />
            <label className="text-[15px]" htmlFor="">
              {type.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default FilterType;
