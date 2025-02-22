import Section from "./Section";
import { useState } from "react";

const About = () => {
  const [description, setDescription] = useState(
    "Sou uma desenvolvedora front-end especializada em React, TypeScript e Next.js. Meu foco é construir aplicações performáticas, escaláveis e com interfaces modernas que garantam a melhor experiência para os usuários."
  );

  return (
    <Section id="about">
      <div className="container">
        <div className="relative">
          <div className="relative z-1 flex flex-col items-center h-auto mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20">
            <h2 className="text-3xl font-bold mb-4">
              Sobre Ser Programadora Front-End
            </h2>
            <p className="body-2 mb-4 text-n-3 text-center">{description}</p>
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() =>
                setDescription(
                  "Trabalhar com front-end significa transformar ideias e designs em realidade, criando interfaces interativas e acessíveis para milhões de usuários."
                )
              }
            >
              Descubra Mais
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
