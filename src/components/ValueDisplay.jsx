import { useRef, useEffect } from "react";

export const ValueDisplay = ({ value }) => {
  const prevValueRef = useRef(value);
  useEffect(() => {
    if (prevValueRef.current) {
      prevValueRef.current = value;
    }
  }, [value]);
  return (
    <div>
      <p>Current value: {value}</p>
      <p>Previous value: {prevValueRef.current}</p>
    </div>
  );
};
