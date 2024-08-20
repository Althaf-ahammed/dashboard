
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <span className="text-lg font-semibold">Home &gt; Dashboard V2</span>
      </div>
      <div className="flex items-center">
        <input 
          type="text" 
          placeholder="Search anything..." 
          className="border rounded-full px-4 py-2 text-sm focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Header;
