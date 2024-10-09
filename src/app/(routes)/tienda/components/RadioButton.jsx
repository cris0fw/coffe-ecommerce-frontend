import React from "react";

const RadioButton = ({ key, event, value, name, label }) => {
  return (
    <div key={key} className="flex gap-2 items-center">
      <input
        onChange={(e) => event(e.target.value)}
        type="radio"
        value={value}
        name={name}
      />
      <label className="text-[15px]" htmlFor="">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
