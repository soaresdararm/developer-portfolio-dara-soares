import ButtonGradient from "./assets/svg/ButtonGradient";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";

import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[5.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <Services />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
