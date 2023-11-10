import useMediaQuery from "@/hooks/useMediaQuery";
import { ListBullets, SquaresFour } from "@phosphor-icons/react";

const ToggleView = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      {isAboveMediumScreens ? (
        <>
          {" "}
          <div className="hover:bg-gray-300 rounded-lg  p-1">
            <ListBullets size={32} />
          </div>
          <div className="hover:bg-gray-300 rounded-lg  p-1">
            <SquaresFour size={32} />
          </div>
        </>
      ) : (
        <>
          <div className="rounded-lg shadow-lg flex p-4 gap-4">
            <div className="hover:bg-gray-300 rounded-lg  p-1">
              <ListBullets size={32} />
            </div>
            <div className="hover:bg-gray-300 rounded-lg  p-1">
              <SquaresFour size={32} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ToggleView;
