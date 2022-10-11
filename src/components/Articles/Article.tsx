import React from "react";
import { Link } from "react-router-dom";
interface IArticleItemProps {
    id: string,
    name: string,
    description: string,
    date: string
}

const Article = ({id, name, description, date}: IArticleItemProps) => {
    return (
        <article className=" bg-white-bg-article sm:text-black-grey font-350 text-sm leading-6 sm:pt-4 pt-5 sm:pr-7 pr-0 sm:pl-7 pl-4 sm:pb-6 pb-5
        mt-7 sm:mt-6 sm:rounded-lg rounded-r-lg sm:space-y-3 sm:mr-0 mr-5 ml-5 sm:ml-0 sm:border-none border-l-2 border-green-bright 
        active:border-black">
            <h1 className="bg-white-bg-article text-normal-black overflow-auto pr-0 pl-0 sm:text-xl text-lg sm:bg-black sm:text-gray-light mt-0 grid-cols-1 
            sm:shadow-list-shadow sm:pt-2 sm:pb-2 leading-6 font-normal">  
                <a href="g" className="w-full h-full block ">
                    {name}
                </a>
            </h1>
            <div className="hidden sm:inline">
                <div className="pt-4 ">
                    <img className="float-left pt-1 pr-1" alt='' src="images/icons/calendar.svg" />
                            <span className="text-xs text-gray  ">{date}</span>
                </div>
                <p className="overflow-hidden max-h-24">{description} </p>    
                <div className="text-right grid grid-cols-1 pb-2"> 
                    <Link to={`/article/${id}`} className="grid grid-flow-col justify-self-end text-green active:text-green-bright hover:text-green-light"> 
                        
                        <span className="pr-1">Подробнее </span> 
                        <img alt='' className="float-right clear-none pt-1" src="images/icons/details.svg"/>
                    </Link> 
                </div>   
            </div>        
        </article>
    )
}

export default Article;


