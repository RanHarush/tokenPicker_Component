import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { FilteredTokens } from "./FilteredTokens";
import tokensArr from "../assets/tokens.json";

const Modal = ({ visible, onClose }) => {
  const [tokens, setTokens] = useState(tokensArr);

  const handleFilterInput = (input) => {
    let regex = new RegExp(input, "i");
    setTokens(tokensArr.filter((item) => regex.test(item.name)));
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-blue-950 opacity-20 -z-10"
      ></div>
      <div className="bg-[#0A0E16] h-2/3 w-1/4 rounded-3xl border-2 border-[#161B27] shadow-xl p-8 overflow-y-hidden max-2xl:w-fit">
        <div className="text-white flex justify-between">
          <p className="text-xl">Select a token</p>
          <XMarkIcon onClick={onClose} className="w-6 hover:cursor-pointer" />
        </div>
        <FilteredTokens
          FilteredInput={handleFilterInput}
          tokens={tokens}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default Modal;
