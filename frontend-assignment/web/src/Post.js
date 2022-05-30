import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Category from './Category';

const Post = ({ post }) => {
    const [value, setValue] = useState('');

    function updateSearchFromTag() {
        const arg = document.getElementById(`${post.tags[0]}`).innerText;
        setValue(arg);
        console.log(value);
    }


    return (
        <article className="Post" >
            <div>
                <img src={post.photos[0]} alt={`${post.title}`} className="Post-main-img" >
                </img>
                {/* <Link to={`/post/${post.eid}`}> */}
            </div>
            <div className="Post-content-layout">
                <h2 className="Post-Header"><a href={`${post.url}`} target="blank" alt={`${post.title}`}>{post.title}</a></h2>
                {/* </Link> */}
                <p className="postBody">
                    {
                        `${post.description.slice(0, 170)}...`
                    }
                    <a href={`${post.url}`} target="blank" alt={`${post.title}`}><span className="Post-Read-More">Read more</span></a>
                    {/* <Link to={`${post.url}`} >Read More</Link> */}
                </p>


                <div className="Categories">
                    <Category post={`${post.tags} `} />
                </div>

                {/* <button onClick={updateSearchFromTag} id={`${post.tags[0]}`} >
                    {post.tags[0]}
                </button> */}
                {/* <SearchBar search={value} value={value} /> */}
                <div className="Post-additional-img-layout">
                    <img src={post.photos[1]} alt={`${post.title}`} className="Post-additional-img" />
                    <img src={post.photos[2]} alt={`${post.title}`} className="Post-additional-img" />
                    <img src={post.photos[3]} alt={`${post.title}`} className="Post-additional-img" />
                </div>
            </div>
        </article >


    )
}

export default Post