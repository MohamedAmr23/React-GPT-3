import React from 'react'
import './article.css'
const Article = ({imgUrl,date,text}) => {
  return (
    <div className="container-article">
      <div className="img-article">
        <img src={imgUrl} alt="" />
      </div>
      <div className="article-content">
          <div>
            <p>{date}</p>
            <h3>{text}</h3>
          </div>
          <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article