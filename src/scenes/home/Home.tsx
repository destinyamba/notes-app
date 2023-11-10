import { SELECTED_PAGE } from "@/shared/types";
import SearchBar from "@/shared/SearchBar";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import GridView from "../layouts/GridView";
import ListView from "../layouts/ListView";
import ToggleView from "../layouts/ToggleView";

type Props = {
  setSelectedPage: (value: SELECTED_PAGE) => void;
  isToggled: boolean;
  setIsToggled: (value: boolean) => void;
};

const Home = ({ setSelectedPage, setIsToggled, isToggled }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      onViewportEnter={() => setSelectedPage(SELECTED_PAGE.HOME)}
      id="home"
      className="gap-16 py-10 md:pb-0 pb-28"
    >
      <div className="flex justify-center mt-28 p-0 h-2/3">
        {isAboveMediumScreens ? (
          <>
            <div className="flex w-[83%]">
              <div className="flex w-full">
                <SearchBar />
              </div>
              <div className="flex gap-4 z-10 w-1/2 justify-end">
                <div className="rounded-lg shadow-lg flex p-4 gap-2">
                  <button
                    onClick={() => console.log(setIsToggled(!isToggled))}
                    className="flex"
                  >
                    <ToggleView />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-4 z-10 w-[83%] justify-end">
              <button
                onClick={() => console.log(setIsToggled(!isToggled))}
                className="flex justify-end"
              >
                <ToggleView />
              </button>
            </div>
          </>
        )}
      </div>
      {!isAboveMediumScreens ? (
        <div className="flex justify-center">
          <div className="w-[83%] pt-4">
            <SearchBar />
          </div>
        </div>
      ) : null}
      {/* List or Grid of Notes */}
      <div className="flex justify-center pt-8">
        {isToggled ? (
          <>
            <ListView />
          </>
        ) : (
          <>
            <GridView />
          </>
        )}
      </div>
    </motion.section>
  );
};

export default Home;
