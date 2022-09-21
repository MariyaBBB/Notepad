import AddIcon from "../assets/icons/add.svg";
import NoteIcon from "../assets/icons/note.svg";

export interface IMenuItem {
  name: string;
  link: string;
  icon: string;
}

export const menuElements: IMenuItem[] = [
  {
    name: "Новая запись",
    link: "/new-post",
    icon: AddIcon.toString(),
  },
  {
    name: "Список заметок",
    link: "/posts",
    icon: NoteIcon.toString(),
  },
];
