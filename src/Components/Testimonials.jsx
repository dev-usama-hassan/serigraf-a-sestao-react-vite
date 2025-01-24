// import React, { useState, useEffect } from "react";
// import client1 from "../assets/Ellipse.svg";
// import client2 from "../assets/client3.svg";
// import client3 from "../assets/client2.svg";
// import client4 from "../assets/Ellipse.svg";
// import { Element } from "react-scroll";

// const testimonials = [
//   {
//     name: "John Doe",
//     position: "Software Engineer",
//     message:
//       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestias unde animi ea, laudantium harum eius eum voluptates nostrum quisquam odio delectus voluptatem iusto  ",
//     avatar: client1,
//   },
//   {
//     name: "Jane Smith",
//     position: "Designer",
//     message:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestias unde animi ea, laudantium harum eius eum voluptates nostrum quisquam odio delectus voluptatem iusto ",
//     avatar: client2,
//   },
//   {
//     name: "Alice Johnson",
//     position: "Product Manager",
//     message:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestias unde animi ea, laudantium harum eius eum voluptates nostrum quisquam odio delectus voluptatem iusto .",
//     avatar: client3,
//   },
//   {
//     name: "Bob Brown",
//     position: "Marketing Specialist",
//     message:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestias unde animi ea, laudantium harum eius eum voluptates nostrum quisquam odio delectus voluptatem iusto ",
//     avatar: client4,
//   },
// ];

// const TestimonialsCards = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideCount = 3;
//   const totalTestimonials = testimonials.length;

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const visibleTestimonials = testimonials
//     .slice(currentIndex, currentIndex + slideCount)
//     .concat(
//       testimonials.slice(
//         0,
//         Math.max(0, currentIndex + slideCount - totalTestimonials)
//       )
//     );

//   return (
//     <Element name="testimonials">
//       <div className="relative px-20 py-16">
//         <h1 className="text-[#474747] font-bold text-2xl text-center pt-6">
//           What our Clients say...
//         </h1>

//         <div className="flex overflow-x-hidden mt-12 py-2">
//           {visibleTestimonials.map((testimonial, index) => (
//             <div key={index} className="flex-none w-1/3 px-4">
//               <div className="bg-white p-6 rounded-lg shadow">
//                 <div className="flex items-center mb-4">
//                   <img
//                     src={testimonial.avatar}
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full mr-4"
//                   />
//                   <div>
//                     <h3 className="text-xl font-semibold">
//                       {testimonial.name}
//                     </h3>
//                     <p className="text-gray-500">{testimonial.position}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700">{testimonial.message}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-4">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full mx-1 ${
//                 index === currentIndex ? "bg-gray-800" : "bg-gray-300"
//               }`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </Element>
//   );
// };

// export default TestimonialsCards;
