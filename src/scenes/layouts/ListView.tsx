import { notes } from "@/shared/types";

const ListView = () => {
  return (
    <div className="w-[83%] grid lg:grid-cols-1 lg:gap-4 md:grid-cols-1 md:gap-6 sm:grid-cols-1 sm:gap-8 xs:grid-cols-1">
      {notes.map((note, index) => {
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

export default ListView;
