import MenuWidget from "../components/menuWidget";
import NavBar from "../components/navbar";

const Menu = () => {
  return (
    <div className="h-screen w-screen ">
      <NavBar />
      <div
        className="bg-black opacity-80 h-screen w-screen
    "
      >
        <div className="flex flex-col Justify-center items-center ">
          <p className="text-2xl font-bold text-white mb-1 mt-3">OUR MENU</p>
          <div className="h-1.5 w-12 bg-yellow-400"></div>
        </div>
        <div className="flex flex-row gap-x-8 p-16 justify-center items-center">
          <MenuWidget
            title="Chocolate Cake"
            description="Freshly baked cake with chocolate frosting and a hint of vanilla."
            imageUrl="/assets/chocolate cake.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
