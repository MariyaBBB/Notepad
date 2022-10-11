import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../tools/tools";

const tools: ITools = EDITOR_JS_TOOLS;
interface ITools {
  
    [toolName: string]: any; 
  
}
const ReactEditorJS = createReactEditorJS();

const ReactEditor = () => {
        console.log(ReactEditorJS);
        return (
        <div className="min-h-280 min-w-full">
        <ReactEditorJS 
            tools={tools}
            defaultValue={{
                time: 1,
                blocks: [
                  {
                    id: "sheNwCUP5A",
                    type: 'header',
                    data: {
                        level: 1,
                    },
                    
                  },
                  {
                    id: "12iM3lqzcm",
                    type: "paragraph",
                    data: {
                               
                    }
                  },
                ]
              }}
            />
            
            </div>
    )
    
    
}

export default ReactEditor;