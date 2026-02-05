import { useMemo, useState } from "react";

export default function SortedNumbers({ theme }) {
  const [numbers] = useState(() =>
    Array.from({ length: 5000 }, () => Math.floor(Math.random() * 10000))
  );

  const sortedNumbers = useMemo(() => {
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  return (
    <div>
      <h3>Sorted Numbers ({theme} theme)</h3>
      <p>First Number: {sortedNumbers[0]}</p>
    </div>
  );
}
