import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as AddIcon} from "../assets/icons/add.svg";
import { ReactComponent as NoteIcon} from "../assets/icons/note.svg";

export interface IMenuItem {
  id: number,
  name: string;
  link: string;
  icon?: string;
}

export const menuElements: IMenuItem[] = [
  {
    id: 1,
    name: "Новая запись",
    link: "/new-post",
    icon: "add",
  },
  {
    id: 2,
    name: "Список заметок",
    link: "/posts",
    icon: "note",
  },
];
