import React from "react";
import getFilterOrigin from "@/api/UseFilterOriginProducts";
import RadioButton from "./RadioButton";

const FilterConteiner = ({ setFilterOrigin }) => {
  const { result, error, loading } = getFilterOrigin();

  return (
    <div>
      <h2 className="text-[18px] lg:text-[15px] font-semibold">Origen</h2>

      {loading && result === null && <p>Cargando origen...</p>}

      {result !== null &&
        result.schema.attributes.origin.enum.map((origin) => {
          return (
            <RadioButton
              key={origin}
              event={setFilterOrigin}
              value={origin}
              name="filterOrigin"
              label={origin}
            />
          );
        })}
    </div>
  );
};

export default FilterConteiner;
