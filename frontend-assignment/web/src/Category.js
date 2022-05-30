import React, { useEffect } from 'react'

const Category = ({ post }) => {
    let get = document.getElementsByClassName("trial");
    // const mytags = post.split(",")

    // function loopCategories(categories) {
    //     let myCategories = "";
    //     let testButtons = "";
    //     for (let i = 0; i < mytags.length - 1; i++) {
    //         // myCategories += "<button>" + `${mytags[i]}, ` + "</button>"
    //         myCategories += `${"<button>"}` + `${mytags[i]}` + `${"</button>"}`
    //         myCategories += `${mytags[i]}, `
    //         testButtons += `${<button>myCategories</button>}`
    //     }
    //     myCategories += `and ${mytags[mytags.length - 1]}`
    //     testButtons += `${<button>myCategories</button>}`
    //     // get.innerHTMl = myCategories
    //     // console.log(get)
    //     // return testButtons
    //     return <buttton>{myCategories}</buttton>
    // }

    // function loopCategories2() {
    //     return mytags.map((tag) => {
    //         return <button>{tag}</button>
    //     })
    // }

    const mytags = post.split(",")
    function loopCategories3() {
        const array = []
        for (var i = 0; i < mytags.length - 1; i++) {
            array.push(<button styles={{ background: "red", color: 'red' }}>{mytags[i]},</button>)
        }
        array.push(<button className="Trial"> and {mytags[mytags.length - 1]}</button>)
        return array
    }

    return (

        <div className="Trial">
            {/* Category: {post} */}
            {/* Category: {loopCategories(post)} */}

            {/* {loopCategories2()} */}
            {loopCategories3()}
        </div>

    )
}

export default Category