import React from "react";
import { articles, IArticleItem } from "../../data/articles";
import Article from "./Article";

const ArticleList = () => {
    
    return (
        <>
        {articles.map( (article: IArticleItem) =>
            <Article 
                key={article.id}
                id={article.id}
                name={article.name}
                description={article.description}
                date={article.date}
                />
            )}
        </>
    )
}

export default ArticleList;