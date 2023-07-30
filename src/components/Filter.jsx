import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const Filter = ({ filterFunc }) => {
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    filterFunc(filterInput);
  }, [filterInput]);

  return (
    <>
      <MagnifyingGlassIcon className="text-white w-6 min-w-[25px] m-3 absolute" />
      <input
        type="text"
        placeholder="Search name or past address"
        value={filterInput}
        onChange={(e) => setFilterInput(e.target.value)}
        className="w-full bg-transparent rounded-2xl border border-[#091736] p-2 text-xl text-white placeholder:text-[#46392C] text-center"
      />
    </>
  );
};

export default Filter;
