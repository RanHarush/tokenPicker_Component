import Filter from "./Filter";
import List from "./List";

export const FilteredTokens = ({ FilteredInput, tokens, onClose }) => {
  return (
    <>
      <div className="my-5 relative">
        <Filter filterFunc={FilteredInput} />
      </div>
      <div className="h-full overflow-y-auto scrollbar-hide">
        <List tokens={tokens} onclick={onClose} />
      </div>
    </>
  );
};
