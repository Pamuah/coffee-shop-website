const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center py-2 bg-[#2A1114] px-16 ">
      <div className="flex flex-row gap-x-2 items-center">
        <img src="/assets/coffee.png" className="w-12 h-12" alt="logo" />
        <div className="text-xl text-white">Coffee</div>
      </div>

      <div className="flex md:flex-row gap-x-8 ">
        <div
          onClick={() => {
            window.location.href = "/";
          }}
          className="text-sm text-white hover:underline cursor-pointer hover:text-amber-400"
        >
          Home
        </div>
        <div
          onClick={() => {
            window.location.href = "/";
          }}
          className="text-sm text-white hover:underline cursor-pointer hover:text-amber-400"
        >
          About
        </div>
        <div
          onClick={() => {
            window.location.href = "/";
          }}
          className="text-sm text-white hover:underline cursor-pointer hover:text-amber-400"
        >
          Menu
        </div>
        <div
          onClick={() => {
            window.location.href = "/";
          }}
          className="text-sm text-white hover:underline cursor-pointer hover:text-amber-400"
        >
          Gallery
        </div>
        <div
          onClick={() => {
            window.location.href = "/";
          }}
          className="text-sm text-white hover:underline cursor-pointer hover:text-amber-400"
        >
          Contacts
        </div>
      </div>
    </div>
  );
};

export default NavBar;
