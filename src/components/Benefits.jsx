import ClipPath from "../assets/svg/ClipPath";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
} from "../assets";

const benefits = [
  {
    id: "0",
    title: "Domínio de Tecnologias Front-end",
    text: "Experiência sólida em desenvolvimento front-end, incluindo o uso de React.js e Next.js.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Integração de Bibliotecas de Componentes",
    text: "Experiência na integração e personalização de bibliotecas de componentes como Material-UI e Tailwind",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Habilidade em Styled-Components e Tailwind CSS",
    text: "Competência em utilizar Styled-Components para criar estilos reutilizáveis em React, assim como em Tailwind CSS para desenvolvimento ágil de interfaces com uma abordagem utility-first.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Pensamento Orientado ao Componente",
    text: "Capacidade de decompor interfaces complexas em componentes reutilizáveis e independentes, favorecendo uma arquitetura modular e escalável.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Atenção aos Detalhes e Usabilidade",
    text: " Foco na usabilidade e na experiência do usuário final, garantindo que as interfaces desenvolvidas sejam acessíveis, responsivas e visualmente atraentes em diferentes dispositivos e navegadores.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Consumo de APIs REST",
    text: "A integração do front-end com o back-end para consumo de APIs REST permite uma comunicação eficiente e dinâmica entre a interface do usuário e os serviços de dados, proporcionando uma experiência mais responsiva e interativa.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        {/* <Heading
          className="md:max-w-md lg:max-w-5xl"
          title="Transformando ideias em experiências digitais envolventes e funcionais"
        /> */}
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow /> */}
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
