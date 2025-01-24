import React from "react";
import aboutImage from "../assets/aboutimage.jpg";
import machine1 from "../assets/machine1.jpeg";
import Footer from "./Footer";
import AboutHeader from "./AboutHeader";
import SubNav from "./SubNav";

const Aboutus = () => {
  return (
    <>
      <SubNav />
      <AboutHeader />
      <div className="w-[65%] mx-auto py-4">
        <h1 className="text-[#474747] font-bold text-center text-3xl pt-12 pb-7 underline">
          About us
        </h1>
        <div>
          <div>
            <img src={aboutImage} alt="" className="h-full mx-auto w-full" />
          </div>
          <div className="py-7 flex gap-6">
            <div className=" w-1/2 flex items-center ">
              <img src={machine1} alt="" className="h-5/6" />
            </div>
            <div className=" w-4/5 px-3">
              <h1 className="text-xl font-semibold text-[#2d2d2d] text-center">
                {" "}
                Empresa Líder en Serigrafía Textil
              </h1>
              <p className="text-[#5d5c5c] font-normal text-sm mt-4 text-center">
                Desde 1991, hemos sido pioneros en el sector, ocupando una
                posición privilegiada que nos permite ser referentes en el uso e
                innovación de nuevas tecnologías. Nuestra dedicación y
                experiencia nos han consolidado como una empresa de confianza
                para nuestros clientes.
              </p>
              <p className="text-[#5d5c5c] font-normal text-sm mt-2 text-center">
                Contamos con un equipo de expertos profesionales que se
                reinventa día a día, 24/7, gracias a nuestro pionero
                departamento de I+D. Estamos siempre a la vanguardia para
                ofrecerte todo nuestro potencial y superar tus expectativas.
                Nuestro compromiso con la calidad y la excelencia se refleja en
                cada proyecto que emprendemos.
              </p>
              <p className="text-[#5d5c5c] font-normal text-sm mt-2 text-center">
                Ofrecemos una amplia gama de servicios de serigrafía textil,
                adaptándonos a las necesidades específicas de cada cliente. Ya
                sea para grandes tiradas o pequeños pedidos personalizados,
                garantizamos resultados excepcionales y duraderos. Trabajamos
                con los mejores materiales y técnicas avanzadas para asegurar la
                máxima satisfacción.
              </p>
              <p className="text-[#5d5c5c] font-normal text-sm mt-2 text-center">
                En Serigrafías Sestao, creemos que cada idea es única y merece
                ser llevada a la realidad con el mayor cuidado y precisión.
                Nuestra pasión por la serigrafía se traduce en productos finales
                que destacan por su creatividad y acabado impecable.
              </p>
              <p className="text-[#5d5c5c] font-normal text-sm mt-2 text-center">
                ¡Pídenos lo que imagines y lo haremos realidad!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
