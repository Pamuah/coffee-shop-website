import NavBar from "../components/navbar";

const About = () => {
  return (
    <div>
      <NavBar />

      <div className="flex flex-row p-16 justify-between ">
        <div className="border border-gray-200 w-58 h-58 rounded-full shadow-xs bg-amber-200"></div>

        <div className="flex flex-col Justify-center items-center">
          <p className="text-2xl font-bold text-[#2A1114] mb-1">ABOUT US</p>
          <div className="h-1.5 w-12 bg-yellow-400"></div>

          <p className="text-sm text-[#2A1114] my-8 leading-relaxed">
            At Coffee House in East-Legon, Accra, we pride ourselves on being a{" "}
            <br /> go-to destination for coffee lovers and conversation seekers
            alike.
            <br />
            We're dedicated to providing an exceptional experience coffee
            experience in a<br />
            cozy and inviting atmosphere, where guests can unwind, relax,
            connect
            <br />
            and enjoy their time of comfort.
          </p>

          <div className="flex flex-row gap-x-6">
            <img
              src="/assets/facebook.png"
              alt="facebook"
              className="w-12 h-12"
            />

            <img
              src="/assets/instagram.png"
              alt="Instagram"
              className="w-12 h-12"
            />

            <img
              src="/assets/twitter.png"
              alt="Twitter"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
