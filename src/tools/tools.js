import Header from "@editorjs/header";
import Table from "@editorjs/table";
import Paragraph from "@editorjs/paragraph"


export const EDITOR_JS_TOOLS = {
  table: Table,
  header:  {
    class: Header,
    config: {
      placeholder: 'Заголовок',
    }
  },
  paragraph: {
    class: Paragraph,
    config: {
      placeholder: 'Содержимое заметки',
    },
  }
};


