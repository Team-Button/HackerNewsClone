import React from "react";

const Article = props => {

    return (
        <section style={{ height: "35px", width: "85%" }}>
            <p>{props.info.data.title} {" "} ({props.info.data.url})</p>
            <p>Other stats</p>
        </section>
    )
}

export default Article;