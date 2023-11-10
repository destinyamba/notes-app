import { notes } from "@/shared/types";

const GridView = () => {
  return (
    <div className="w-[83%] grid lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-6 sm:grid-cols-2 sm:gap-8 xs:grid-cols-1">
      {notes.slice(0, 8).map((note, index) => {
        return (
          <div
            key={index}
            className="p-8 rounded-lg shadow-lg hover:shadow-2xl hover:z-50"
          >
            <p className="font-semibold text-md">{note.title}</p>
            <p>{note.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GridView;
