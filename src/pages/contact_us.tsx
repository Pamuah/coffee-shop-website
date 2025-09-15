import NavBar from "../components/navbar";
import { Pin, Phone, Mail, Clock, Globe } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="h-screen w-screen bg-neutral-200">
      <NavBar />
      <div className="flex flex-col mt-8 items-center px-16 justify-between">
        <p className="text-2xl font-bold text-[#2A1114] mb-1 ">CONTACT US</p>
        <div className="h-1.5 w-12 bg-yellow-500 mb-8"></div>

        <div className="flex flex-row justify-between w-full px-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row gap-x-4 items-center">
              <Pin size={25} color="gray" />
              <p className="text-lg text-gray-700 ">
                123 Main Street, Accra, Ghana
              </p>
            </div>
            <div className="flex flex-row gap-x-4 items-center">
              <Mail size={25} color="gray" />
              <p className="text-lg text-gray-700 ">info@cakebarkershop.com</p>
            </div>
            <div className="flex flex-row gap-x-4 items-center">
              <Phone size={25} color="gray" />
              <p className="text-lg text-gray-700 ">(+233) 55 555 5555</p>
            </div>
            <div className="flex flex-row gap-x-4 items-center">
              <Clock size={25} color="gray" />
              <p className="text-lg text-gray-700 ">
                Monday - Friday: 8:00am - 5:00pm
              </p>
            </div>
            <div className="flex flex-row gap-x-4 items-center">
              <Clock size={25} color="gray" />
              <p className="text-lg text-gray-700 ">
                Saturday - Sunday: Closed
              </p>
            </div>
            <div className="flex flex-row gap-x-4 items-center">
              <Globe size={25} color="gray" />
              <p className="text-lg text-gray-700 ">www.cakebarkershop.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="w-96 px-3 py-1.5 border border-black rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2A1114] focus:border-transparent my-2"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-96 px-3 py-1.5 border border-black rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2A1114] focus:border-transparent my-2"
              />
              <input
                type="text"
                placeholder="Message"
                className="w-96 px-3 py-1.5 border border-black rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2A1114] focus:border-transparent my-2"
              />
            </div>

            <div className="flex flex-row gap-x-6 mt-4">
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
    </div>
  );
};

export default ContactPage;
