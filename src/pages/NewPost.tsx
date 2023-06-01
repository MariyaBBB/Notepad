import React from "react";
import ReactEditor from "../components/ReactEditor";
import {ReactComponent as AddButtonIcon} from "../assets/icons/add-button.svg";

const NewPost = () => {
    return (
        <article className="mt-6 sm:mr-0 mr-5 ml-5 sm:ml-0 ">
            <div className="bg-white-bg-article text-black-grey font-350 leading-6 pt-6 pr-7 
            pl-7 mt-6 rounded-lg space-y-5 pb-6 min-h-280 min-w-90%  ">
                <ReactEditor />
                    <div className="grid grid-cols-1 sm:mt-[-67px] sm:mr-7 mt-6 text-base sm:text-sm">
                <button
                    className="sm:grid sm:grid-flow-col sm:justify-self-end bg-green-bright text-white-bg-article pr-4 pl-4 pt-2 pb-2 rounded-md 
                     sm:hover:bg-green active:bg-green-button block 
                     "> 
                    <AddButtonIcon className="sm:float-left inline sm:m-0.5 m-1 sm:mr-2 mr-2 " />
                    Добавить
                </button>
            </div>
            </div>
            
        </article>
    )
}

export default NewPost;