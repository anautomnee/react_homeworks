import { useState } from "react";
import { ValueDisplay } from "./ValueDisplay";

export const Input = () => {
  const [value, setValue] = useState("Default");
  return (
    <div>
      <h1>Current and previous value</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ValueDisplay value={value} />
    </div>
  );
};
