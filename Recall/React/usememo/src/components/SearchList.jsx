import { useMemo, useState } from "react";
import { bigList } from "../data/bigList";

export default function SearchList() {
  const [search, setSearch] = useState("");

  const filteredList = useMemo(() => {
    return bigList.filter(item =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h3>Search</h3>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <p>Results: {filteredList.length}</p>
    </div>
  );
}
