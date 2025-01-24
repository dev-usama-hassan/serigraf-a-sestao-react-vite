// import React from "react";
// import men from "../assets/fullsleeve.webp";
// import women from "../assets/women_2.jpg";
// import kid from "../assets/kid.webp";
// import { useNavigate } from "react-router-dom";
// // import { Element } from "react-scroll";

// const Categories = () => {
//   const category = [
//     {
//       image: men,
//       name: "Men",
//       route: "/men",
//     },
//     {
//       image: women,
//       name: "Women",
//       route: "/women",
//     },
//     {
//       image: kid,
//       name: "Kids",
//       route: "/kids",
//     },
//   ];

//   const navigate = useNavigate();

//   return (
//     // <Element name="shop">
//       <div className="pt-16 pb-9 w-full flex justify-center items-center">
//         <div className="w-1/2 flex justify-evenly items-center">
//           {category.map(({ image, name, route }, index) => (
//             <div
//               key={index}
//               className="category-item relative h-40 w-40 flex flex-col gap-2 justify-center items-center hover:cursor-pointer"
//               onClick={() => navigate(route)}
//             >
//               <div className="category-border absolute inset-0 rounded-full"></div>
//               <img src={image} alt={name} className="h-20 w-20 z-10" />
//               <p className="text-[#474747] font-normal z-10">{name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     // </Element>
//   );
// };

// export default Categories;
