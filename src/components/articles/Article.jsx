import React from "react";

const Article = props => {

    return (
        <section className="articleDiv">
            <p>{props.info.data.title} {" "} ({props.info.data.url})</p>
            <p>Other stats</p>
        </section>
    )
}

export default Article;