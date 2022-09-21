import React from "react";
import { articles, IArticleItem } from "../../data/articles";
import Article from "./Article";

const ArticleList = () => {
    
    return (
        <>
        {articles.map( (article: IArticleItem) =>
            <div className="overflow-hidden max-h-72 ">
            <Article 
                key={article.name}
                name={article.name}
                description={article.description}
                date={article.date}
                />
            </div>
            )}
        </>
    )
}

export default ArticleList;