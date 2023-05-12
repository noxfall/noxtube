import SearchBox from './SearchBox';

const Topbar: React.FC = (): JSX.Element => {
  return (
    <nav className="absolute flex justify-between items-center w-full h-[50px] top-0 px-2">
      <div className="w-full"></div>
      <SearchBox />
      <div className="w-full flex justify-end items-center"></div>
    </nav>
  );
};

export default Topbar;
