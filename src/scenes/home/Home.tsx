import { SELECTED_PAGE, notes } from "@/shared/types";
import { ListBullets, SquaresFour } from "@phosphor-icons/react";
import SearchBar from "@/shared/SearchBar";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SELECTED_PAGE) => void;
};

const Home = ({ setSelectedPage }: Props) => {
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
      className="gap-16 py-10 md:pb-0"
    >
      <div className="flex justify-center mt-28 p-0 h-2/3">
        {isAboveMediumScreens ? (
          <>
            <div>
              <SearchBar />
            </div>
            <div className="flex gap-4 z-10 w-[63%] justify-end">
              <div className="rounded-lg shadow-lg flex p-4 gap-4">
                <ListBullets size={32} />
                <SquaresFour size={32} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-4 z-10 w-[83%] justify-end">
              <div className="rounded-lg shadow-lg flex p-4 gap-4">
                <ListBullets size={32} />
                <SquaresFour size={32} />
              </div>
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
        <div className="w-[83%] grid lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-6 sm:grid-cols-2 sm:gap-8 xs:grid-cols-1">
          {notes.map((note, index) => {
            return (
              <div key={index} className="p-8 rounded-lg shadow-lg">
                <p className="font-semibold text-md">{note.title}</p>
                <p>{note.description}</p>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
