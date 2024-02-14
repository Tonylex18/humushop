import SortBtn from "./SortBtn";

const SortDropDown = ({ openSort, handleClick }: any) => {
  return (
    <div
      className={`absolute flex flex-col justify-start ${
        openSort && "ease-linear duration-300"
      } -bottom-40 right-0 bg-white z-10 w-36 shadow-lg rounded-b-lg`}
    >
      <SortBtn color="red" handleClick={handleClick} />
      <SortBtn color="blue" handleClick={handleClick} />
      <SortBtn color="white" handleClick={handleClick} />
      <SortBtn color="purple" handleClick={handleClick} />
    </div>
  );
};
export default SortDropDown;
