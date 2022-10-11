import React, {  } from "react";
import { useParams } from "react-router-dom";
import { articles,  } from "../data/articles";


const ArticlePage = () => {
    
    const id = useParams().id;
    const articlePage = articles.find((article) => article.id === id);

    if(!articlePage) { return ( <h1> Страница не найдена</h1>)}
    return (
        <>
        <article className="mt-6">
        <h1 className="sm:ml-4 sm:mr-2 ">
          <span
            className="sm:text-2xl block  sm:inline text-lg sm:leading-9 bg-black text-gray-light mt-5 sm:shadow-black-shadow sm:border-0
            border-black border-20"
          >
            {articlePage.name}
          </span>
        </h1>
        <div
          className="bg-white-bg-article text-black-grey font-350 text-sm leading-6 pt-6 pr-7 pl-7 mt-6 rounded-lg space-y-5 pb-6"
        >
          <p>
            {articlePage.description}
          </p>

          <div className="mt-8">
            <img className="float-left pt-1 pr-1" alt="" src="../images/icons/calendar.svg" />
            <span className="text-xs text-gray">21 августа 2022г.</span>
          </div>
        </div>
      </article>
      </>
    )
}

export default ArticlePage;