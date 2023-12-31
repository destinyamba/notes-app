import { useEffect, useState } from "react";
import { SELECTED_PAGE } from "./shared/types";
import Navbar from "./scenes/navbar/Navbar";
import Home from "./scenes/home/Home";
import Footer from "./scenes/footer/Footer";

const App = () => {
  const [isToggled, setIsToggled] = useState(false);

  const [selectedPage, setSelectedPage] = useState<SELECTED_PAGE>(
    SELECTED_PAGE.HOME
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SELECTED_PAGE.HOME);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app">
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTopOfPage={isTopOfPage}
        />
        <Home
          setSelectedPage={setSelectedPage}
          isToggled={isToggled}
          setIsToggled={setIsToggled}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
