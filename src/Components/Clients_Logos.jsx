import React, { useState, useEffect } from "react";
import client1 from "../assets/1.png";
import client2 from "../assets/2.png";
import client3 from "../assets/3.png";
import client4 from "../assets/4.png";
import client5 from "../assets/5.png";
import client6 from "../assets/6.png";
import client7 from "../assets/7.png";
import client8 from "../assets/8.png";

const testimonials = [
  { avatar: client1 },
  { avatar: client2 },
  { avatar: client3 },
  { avatar: client4 },
  { avatar: client5 },
  { avatar: client6 },
  { avatar: client7 },
  { avatar: client8 },
];

const ClientsLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 3;
  const totalTestimonials = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials
    .slice(currentIndex, currentIndex + slideCount)
    .concat(
      testimonials.slice(
        0,
        Math.max(0, currentIndex + slideCount - totalTestimonials)
      )
    );

  return (
    <div className="relative w-[65%] mx-auto pb-12 pt-8">
      <h1 className="underline text-2xl font-bold text-center">Clientes Que Han </h1>
      <h1 className="underline text-2xl font-bold text-center">Confiado En Nosotros </h1>
      <div className="flex justify-center overflow-hidden mt-12 py-2">
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index} className="flex-none w-1/3 px-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.avatar}
                  className="rounded-full"
                  alt={`Client ${index + 1}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalTestimonials }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>  
    </div>
  );
};

export default ClientsLogos;
