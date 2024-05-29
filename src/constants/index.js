import {
  chromecast,
  disc02,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  linkedin,
  yourlogo,
  react,
  next,
  tailwind,
  azure,
  styled,
  mui,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Development",
    url: "#react",
  },
  {
    id: "1",
    title: "Front-End",
    url: "#front-end",
  },
  {
    id: "2",
    title: "Driving Software",
    url: "#software",
  },

  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Domínio de ES6+ e tipagem estática",
  "Consumo eficiente de APIs e integração com backend",
  "Utilização e implementação de componentes de design",
  "Técnicas de otimização como Lazy Loading e Code Splitting",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Trabalho em Equipe e Comunicação Eficaz",
    text: "Capacidade de colaborar de forma eficaz com colegas de diferentes disciplinas, como designers, desenvolvedores back-end e gerentes de projeto. ",
    date: "",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
  },
  {
    id: "1",
    title: "Resolução de Problemas e Pensamento Crítico",
    text: " Habilidade de identificar problemas complexos no desenvolvimento de software e aplicar pensamento crítico para encontrar soluções viáveis. ",
    date: "",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Adaptação e Flexibilidade ",
    text: " Capacidade de se adaptar a novas ferramentas, tecnologias e métodos de trabalho conforme necessário. ",
    date: "",
    status: "",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Revisão e Qualidade do Código",
    text: "Participação ativa em revisões de código, fornecendo e recebendo feedback construtivo para melhorar a qualidade do código e aderência às melhores práticas.",
    date: "",
    status: "",
    imageUrl: roadmap1,
    colorful: true,
  },
];

export const collabText =
  "Familiaridade com as bibliotecas e ferramentas associadas ao desenvolvimento React, como Redux para gerenciamento de estado, React ";

export const collabContent = [
  {
    id: "0",
    title: "Compreensão do Ecossistema React:",
    text: collabText,
  },
  {
    id: "1",
    title: "Autodidata e Aprendizado Contínuo",
  },
  {
    id: "2",
    title: "Pensamento Crítico e Criatividade",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "React",
    icon: react,
    width: 34,
    height: 36,
  },
  {
    id: "1",
    title: "Next.js",
    icon: next,
    width: 36,
    height: 28,
  },
  {
    id: "2",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "3",
    title: "Tailwind",
    icon: tailwind,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Azure",
    icon: azure,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Styled",
    icon: styled,
    width: 54,
    height: 64,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Mui",
    icon: mui,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

// export const benefits = [
//   {
//     id: "0",
//     title: "Ask anything",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "./src/assets/benefits/card-1.svg",
//     iconUrl: benefitIcon1,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "1",
//     title: "Improve everyday",
//     text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//     backgroundUrl: "./src/assets/benefits/card-2.svg",
//     iconUrl: benefitIcon2,
//     imageUrl: benefitImage2,
//     light: true,
//   },
//   {
//     id: "2",
//     title: "Connect everywhere",
//     text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
//     backgroundUrl: "./src/assets/benefits/card-3.svg",
//     iconUrl: benefitIcon3,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "3",
//     title: "Fast responding",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "./src/assets/benefits/card-4.svg",
//     iconUrl: benefitIcon4,
//     imageUrl: benefitImage2,
//     light: true,
//   },
//   {
//     id: "4",
//     title: "Ask anything",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "./src/assets/benefits/card-5.svg",
//     iconUrl: benefitIcon1,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "5",
//     title: "Improve everyday",
//     text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//     backgroundUrl: "./src/assets/benefits/card-6.svg",
//     iconUrl: benefitIcon2,
//     imageUrl: benefitImage2,
//   },
// ];

export const socials = [
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/darasoaresmr/",
  },
  {
    id: "3",
    title: "linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/darasoares6466/",
  },
];
