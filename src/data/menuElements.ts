import AddIcon from "../assets/icons/add.svg";
import NoteIcon from "../assets/icons/note.svg";

export interface IMenuItem {
  id: number,
  name: string;
  link: string;
  icon: string;
}

export const menuElements: IMenuItem[] = [
  {
    id: 1,
    name: "Новая запись",
    link: "/new-post",
    icon: AddIcon.toString(),
  },
  {
    id: 2,
    name: "Список заметок",
    link: "/posts",
    icon: NoteIcon.toString(),
  },
];
