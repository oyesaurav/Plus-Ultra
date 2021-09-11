import React from "react";
import "../Css/styles.css"

class Notice extends React.Component
{
    render()
    {
        return (
            <>
                  <div class="article-details">
                    <h4 class="post-category">category</h4>
                    <h3 class="post-title">title</h3>
                    <p class="post-description">description</p>
                    <p class="post-author">By name</p>
                  </div>
            </>
        )
    }
}

export default Notice