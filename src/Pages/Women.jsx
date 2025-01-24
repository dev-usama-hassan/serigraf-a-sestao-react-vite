// import React from 'react'
// import sleeveless from "../assets/women_4.png"
// import fullsleeve from "../assets/women_1.webp"
// import sweater from "../assets/women_3.jpg"
// import halfsleeve from "../assets/women_2.jpg"
// import Button from '../Components/Button'
// import Footer from '../Components/Footer'

// const Women = () => {

//      const products = [
//        {
//          image: fullsleeve,
//          description:
//            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus expedita rerum",
//        },
//        {
//          image: sleeveless,
//          description:
//            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus expedita rerum",
//        },
//        {
//          image: sweater,
//          description:
//            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus expedita rerum",
//        },
//        {
//          image: halfsleeve,
//          description:
//            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus expedita rerum",
//        },
//      ];

//   return (
//     <>
//       <div className="mt-24">
//         <div className="bg-[#f4f5f8] py-24 flex justify-center items-center flex-col gap-2">
//           <h1 className="text-[#2d2d2d] text-4xl font-bold">Women Products</h1>
//           <p className="text-md text-[#474747] font-extralight ">
//             Shirts / Collection / Women{" "}
//           </p>
//         </div>
//       </div>

//       <div className="w-full px-16 mt-16">
//         <div className="mx-auto py-4 bg-[#ebebeb] pl-7 rounded-md">
//           <p className="text-gray-500 text-md font-normal">
//             Showing {products.length} Products
//           </p>
//         </div>
//       </div>

//       <div className="py-6 px-16 flex gap-6">
//         {products?.map(({ image, description }, index) => {
//           return (
//             <div key={index} className="px-5 py-10 shadow rounded">
//               <img src={image} alt="" srcset="" className="h-[200px] mx-auto" />
//               <p className="mt-3">{description}</p>
//               <Button>
//                 <h1 className="relative">Editor</h1>
//               </Button>
//             </div>
//           );
//         })}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Women
