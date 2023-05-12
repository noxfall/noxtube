import { useState, useEffect, ChangeEvent } from 'react';

const SearchBox: React.FC = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setSearchTerm(e.target.value);

  return <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..." className="w-full h-[30px] bg-[#1F212D] outline-none font-[16px] px-[1em]" />
};

export default SearchBox;
