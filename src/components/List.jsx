const List = ({ tokens, onclick }) => {
  return (
    <ul>
      {tokens.map((item) => (
        <li
          key={item.name}
          className="flex items-center gap-6 py-1 hover:bg-[#0D121B] cursor-pointer"
          onClick={onclick}
        >
          <img src={item.logoURI} alt={item.name} className="w-12" />
          <div className="text-[#636468] hover:text-white w-full">
            <p className="text-2xl">{item.name}</p>
            <p>{item.symbol}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
