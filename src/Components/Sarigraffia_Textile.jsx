import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import seri from "../assets/seri_1.jpg";
import seri2 from "../assets/seri_2.jpg";
import seri3 from "../assets/seri_3.jpg";
import seri4 from "../assets/seri_4.jpg";
import seri5 from "../assets/seri_5.jpg";
import seri6 from "../assets/seri_6.jpg";
import seri7 from "../assets/seri_7.jpg";
import seri8 from "../assets/seri_8.jpg";
import { Link } from "react-router-dom";

const Sarigraffia_Textile = () => {
  const row1 = [
    {
      image: seri,
      text: "Digital DTF",
    },
    {
      image: seri2,
      text: "Digital DTF",
    },
    {
      image: seri3,
      text: "Digital DTF",
    },
  ];

  const row2 = [
    {
      image: seri4,
      text: "Digital DTF",
    },
    {
      image: seri5,
      text: "Digital DTF",
    },
    {
      image: seri6,
      text: "Digital DTF",
    },
    {
      image: seri7,
      text: "Digital DTF",
    },
    {
      image: seri8,
      text: "Digital DTF",
    },
  ];

  return (
    <div className="pt-20 w-[65%] mx-auto">
      <div className="flex gap-1">
        {/* // maps  */}
        {row1.map(({ text, image }, index) => {
          return (
            <Link
              to="/dummy_work"
              key={index}
              className="w-1/3 flex flex-col relative group cursor-pointer"
            >
              <div className="bg-[#eeeeee] py-2 flex items-center gap-3 pl-3 group-hover:bg-purple-700 group-hover:text-white">
                <MdKeyboardArrowRight className="text-black group-hover:text-white" />
                <h1 className="text-black group-hover:text-white">{text}</h1>
              </div>
              <img src={image} alt="" className="h-48" />
            </Link>
          );
        })}
      </div>
      <div className="py-3 flex gap-1">
        {row2.map(({ text, image }, index) => {
          return (
            <div
              key={index}
              className="w-1/3 flex flex-col group cursor-pointer"
            >
              <div className="bg-[#eeeeee] py-2 flex items-center gap-3 pl-3 group-hover:bg-purple-700 ">
                <MdKeyboardArrowRight className="text-black group-hover:text-white" />
                <h1 className="text-black group-hover:text-white">{text}</h1>
              </div>
              <img src={image} alt="" className="h-36" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sarigraffia_Textile;
