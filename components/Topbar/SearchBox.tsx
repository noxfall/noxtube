import { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../utils/redux/ytSearch';

const SearchBox: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    searchTerm && dispatch(search(searchTerm));
  }, [searchTerm]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setSearchTerm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchTerm('');
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..." className="w-full h-[30px] bg-[#1F212D] outline-none font-[16px] px-[1em]" />
      <button type="submit" className="display-none"></button>
    </form>
  )
};

export default SearchBox;
