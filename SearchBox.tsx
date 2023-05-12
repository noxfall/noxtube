import { useState, useEffect, ChangeEvent } from 'react';

const SearchBox: React.FC = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setSearchTerm(e.target.value);

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <div className="flex items-center flex-grow ">
      <input className="w-full h-[30px] bg-[#1F212D] outline-none font-[16px] px-[1em]" type="text" value={searchTerm} onChange={handleChange} placeholder="Search..."  />
    </div>
  ); 

};

export default SearchBox;
