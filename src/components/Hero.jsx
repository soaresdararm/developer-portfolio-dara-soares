import { useRef, useState } from "react";
import { ScrollParallax } from "react-just-parallax";
import { bg, curve } from "../assets";
import { heroIcons } from "../constants";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Generating from "./Generating";
import Section from "./Section";

const Hero = () => {
  const parallaxRef = useRef(null);

  const [isModal, setIsModal] = useState(false);

  return (
    <Section
      className="pt-[8.2rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[2.875rem] md:mb-10 lg:mb-[6.25rem]">
          <h1 className="h3 mb-4">
            Developer{" "}
            <span className="inline-block relative">
              Dara Soares{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-1xl mx-auto mb-1 text-n-2 lg:mb-4">
            Transformando linhas de código em experiências cativantes.
          </p>
          {/* <div className="mt-4">
            <Button onClick={() => setIsModal(true)}>Entre em Contato</Button>
          </div> */}
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-4">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.3rem] overflow-hidden md:aspect-[688/590] lg:aspect-[1024/490]">
                <img
                  src={bg}
                  className="w-full scale-[1.9] translate-y-[24%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[13%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
      {isModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-purple-400 rounded-lg shadow-lg p-5 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Contato</h2>
            <p className="mb-2">
              Preencha o formulário abaixo para entrar em contato.
            </p>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Nome</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded  text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Mensagem
                </label>
                <textarea
                  className="w-full p-2 border rounded  text-black"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 px-4 py-2 bg-indigo-950 rounded"
                  onClick={() => setIsModal(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Hero;
