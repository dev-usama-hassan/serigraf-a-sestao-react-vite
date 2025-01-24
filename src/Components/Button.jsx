import React from 'react'

const Button = ({children}) => {
  return (
    <button className="border px-7 py-2 mt-4 rounded border-[#5F16B9] hover:before:scale-0 hover:text-black relative before:w-full before:left-0 before:h-full before:absolute before:bg-[#5F16B9] before:content-[''] before:transition-all before:duration-500 hover:before:opacity-0 text-white flex items-center md:gap-3 lg:gap-5">{children}</button>
  );
}

export default Button
