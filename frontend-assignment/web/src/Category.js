import React, { useEffect } from 'react'

const Category = ({ post }) => {

    let get = document.getElementsByClassName("trial");

    const mytags = post.split(",")

    function loopCategories(categories) {
        let myCategories = "";
        for (let i = 0; i < mytags.length - 1; i++) {
            // myCategories += "<button>" + `${mytags[i]}, ` + "</button>"
            myCategories += `${"<button>"}` + `${mytags[i]}` + `${"</button>"}`
        }
        // myCategories += `and ${mytags[mytags.length - 1]}`
        get.innerHTMl = myCategories
        console.log(get)
        // return get
    }


    return (
        <h1 className="trial">
            Category: {post}
            Category: {loopCategories(post)}
        </h1>
    )
}

export default Category