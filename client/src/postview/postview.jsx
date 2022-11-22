import React from "react";
import Header from "../header/header";
import "./postview.css"
import axios from "axios";
import { useState, useEffect } from "react";

const PostView = () => {

    const [posts, setpost] = useState([])
     
    useEffect(() => {
        axios.get("https://instaclone-backend007.herokuapp.com/user")
            .then((res) => {
                setpost(res.data.profile)
            })
    }, [])
console.log(posts.reverse())
    return (
        <div id="insta-container">
        <Header />
        {posts.map((post) => {
            
            return (<>
                <div id="post-card">
                    <h1>{post.name}</h1>
                    <a href=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                    <h2>{post.location}</h2>
                    <div>
                    <img src={post.image} style={{height:"200px"}}/>
                    </div>
                    
                    <div id="like-box">
                        <i class="fa fa-heart" aria-hidden="true" style={{marginTop:"10px",marginBottom:"10px"}}></i>
 
                        <i class="fa fa-paper-plane-o" aria-hidden="true" style={{marginTop:"10px",marginBottom:"10px"}}></i>
 
                    </div>
                    <div id="desciption" style={{marginTop:"10px",marginBottom:"20px",marginTop:"20px"}}>{post.description}</div>
                </div>

            </>)
        })}
    </div>
    )

}
export default PostView;