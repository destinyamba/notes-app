

export enum SELECTED_PAGE {
    HOME = "home",
    NOTES = "notes",
    TRASH = "trash",
  }


  export interface NoteType {
    id:number;
    title: string;
    description: string;
  };

  export const notes: Array<NoteType> = [
    {
      id:1,
      title: "Weight Training Classes",
      description:
        "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    },
    {
      id:2,
      title: "Weight Training Classes",
      description:
        "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    },
    {
      id:3,
      title: "Weight Training Classes",
      description:
        "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    },
    {
      id:4,
      title: "Weight Training Classes",
      description:
        "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    },
    {
      id:5,
      title: "Weight Training Classes",
      description:
        "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    },
    {
      id:6,
      title: "Weight Training Classes",
      description:
        "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    },
  ];