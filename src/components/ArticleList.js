import React from "react";
import Article from "./Article";

function ArticleList(props) {
    const posts= props.posts
    const postsList=posts.map((post) => 
        <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        />
          );
    return(
        <main>
            {postsList}
        </main>
    )
}

export default ArticleList