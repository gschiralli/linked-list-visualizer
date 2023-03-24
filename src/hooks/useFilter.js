import { useState, useEffect } from "react";
export function useFilter(options, active) {
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    const filteredOptions = options.filter((option) => option !== active);
    setFiltered(filteredOptions);
  }, [active]);
  return filtered;
}
