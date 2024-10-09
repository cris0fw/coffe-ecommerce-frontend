import React from "react";
import getFilterOrigin from "@/api/UseFilterOriginProducts";
import RadioButton from "./RadioButton";

const FilterTaste = ({ setFilterTaste }) => {
  const { result, error, loading } = getFilterOrigin();

  return (
    <div>
      <h2 className="text-[18px] lg:text-[15px] font-semibold">Taste</h2>

      {loading && result === null && <p>Cargando Taste...</p>}

      {result !== null &&
        result.schema.attributes.taste.enum.map((taste) => {
          return (
            <RadioButton
              key={taste}
              event={setFilterTaste}
              value={taste}
              name="filterTaste"
              label={taste}
            />
          );
        })}
    </div>
  );
};

export default FilterTaste;
