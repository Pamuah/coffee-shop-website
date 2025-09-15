import NavBar from "../components/navbar";

const HomePage = () => {
  return (
    <div className="px-16 h-screen w-screen bg-[#2A1114]">
      <NavBar />

      <div className="mt-20 ">
        <div className="flex flex-col gap-y-3">
          <p className="text-3xl font-bold text-yellow-400">Best Coffee</p>
          <p className="text-3xl text-white font-bold">
            Make Your day great with our
            <br />
            special coffee!
          </p>
          <p className="text-sm text-white">
            Welcome to our coffee paradise where you can find the perfect blend
            of
            <br /> coffee to satisfy your cravings.
          </p>

          <div className="flex flex-row gap-x-6">
            <button className="bg-yellow-400 hover:bg-transparent border border-gray-200 text-white font-bold py-2 px-4 rounded-full mt-12">
              Order Now
            </button>
            <button className="bg-transparent hover:bg-yellow-400 border border-gray-200 text-white font-bold py-2 px-4 rounded-full mt-12">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
