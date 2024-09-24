import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import NextButton from "./NextButton";
const Footer = () => {
  return (
    <div>
      <div className="footer py-10 px-20 relative z-30">
        <div className="text-center text-3xl font-extrabold text-white">
          <h1>Group Company</h1>
        </div>
        <div className="flex justify-center gap-6 mt-10 pb-16 border-b-[1px] border-b-white">
          <img
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc4.png&w=1920&q=75"
            alt=""
          />
          <img
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc4.png&w=1920&q=75"
            alt=""
          />
          <img
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc4.png&w=1920&q=75"
            alt=""
          />
          <img
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc4.png&w=1920&q=75"
            alt=""
          />
          <img
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc4.png&w=1920&q=75"
            alt=""
          />
        </div>
        <div className="py-8 flex sm:gap-10 md:gap-20 lg:gap-40 xl:gap-80  pt-20">
          <div className="lg:w-1/3 mb-4 lg:mb-0">
            <div className="relative p-0 m-0">
              <img
                src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Flogo.png&w=256&q=75"
                alt=""
                className="object-contain"
              />
              <div>
                <p className="text-semibold text-[#eddcb5] mb-3">Reach Us</p>

                <ul className="list-none space-y-4">
                  <li className="flex items-center text-white">
                    <FaMapMarkerAlt className="text-white-500 mr-2" />
                    <span className="text-wrap">
                      207/1, ‘Astral House’, B/h. Rajpath Club, Off S. G.
                      Highway, Ahmedabad – 380059, Gujarat, India.
                    </span>
                  </li>
                  <li className="flex items-center text-white">
                    <FaPhone className="text-white-500 mr-2" />
                    <a href="tel:1800 309 9393">1800 309 9393</a>
                  </li>
                  <li className="flex items-center text-white">
                    <FaEnvelope className="text-white-500 mr-2" />
                    <a href="mailto:customercare@astralpaints.com">
                      customercare@astralpaints.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 flex flex-col flex-grow text-white">
            <div className="flex justify-between gap-24 flex-grow">
              <div>
                <h3 className="text-semibold text-[#eddcb5] ">
                  Sign Up to Our Newsletter{" "}
                </h3>
                <p className="text-sm ">lorem ipsum dolor sit amet.</p>
              </div>
              <div>
                <input
                  placeholder="Enter Email Address"
                  className="emailInput bg-transparent"
                />
                <NextButton
                  btnName={"Enquire Now"}
                  btnClass={
                    "inline-block rounded-full bg-[#0060af] px-6 pb-2 pt-2.5 text-md font-lg leading-normal text-white transition duration-150 ease-in-out emailBtn"
                  }
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-3">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-md text-white font-white  dark:text-white ">
                        <thead className=" font-medium ">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-4 text-[#eddcb5]"
                            >
                              About
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 text-[#eddcb5]"
                            >
                              Category
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 text-[#eddcb5]"
                            >
                              Services
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 text-[#eddcb5]"
                            >
                              Downloads
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              About astrals
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              interior paints
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              wall painting
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-[#eddcb5] font-semibold">
                              Become a dealer
                            </td>
                          </tr>
                          <tr className="">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              paint journey
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              exterior paints
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              water Solution
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-[#eddcb5] font-semibold">
                              Blogs
                            </td>
                          </tr>
                          <tr className="">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              Group Companies
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              undercoats
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              painting
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-[#eddcb5] font-semibold">
                              Contact
                            </td>
                          </tr>
                          <tr className="">
                            <td className="whitespace-nowrap px-6 py-4 font-medium"></td>
                            <td className="whitespace-nowrap px-6 py-4">
                              painting tools
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              colour shades
                            </td>
                            <td className="whitespace-nowrap px-6 py-4"></td>
                          </tr>
                          <tr className="">
                            <td className="whitespace-nowrap px-6 py-4 font-medium"></td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Distemper & Enamel
                            </td>
                            <td className="whitespace-nowrap px-6 py-4"></td>
                            <td className="whitespace-nowrap px-6 py-4"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-sm bg-[#0060af] text-white py-5 px-20">
        <p>Terms & Conditions</p>
        <p>ALL RIGHTS RESERVED</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
