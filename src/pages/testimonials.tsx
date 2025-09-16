import NavBar from "../components/navbar";
import TestimonialWidget from "../components/testimonialWidget";

const Testimonials = () => {
  return (
    <div className="h-screen w-screen ">
      <NavBar />
      <div
        className="bg-white h-screen w-screen
    "
      >
        <div className="flex flex-col Justify-center items-center ">
          <p className="text-2xl font-bold text-black mb-1 mt-3">
            Testimonials
          </p>
          <div className="h-1.5 w-12 bg-yellow-400"></div>
        </div>
        <div className="grid grid-cols-3  justify-center items-center mt-8">
          <TestimonialWidget
            title="Chocolate Cake"
            description={
              <>
                Freshly baked cake with chocolate frosting <br />
                and a hint of vanilla.
              </>
            }
            imageUrl="/assets/OIP.webp"
          />
          <TestimonialWidget
            title="Chocolate Cake"
            description={
              <>
                Freshly baked cake with strawberry frosting <br />
                and a hint of vanilla.
              </>
            }
            imageUrl="/assets/happy-handsome.jpg"
          />
          <TestimonialWidget
            title="Vanilla Cake"
            description={
              <>
                Freshly baked cake with vanilla frosting <br />
                and a hint of vanilla.
              </>
            }
            imageUrl="/assets/young.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
