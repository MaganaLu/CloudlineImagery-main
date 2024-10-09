import React from "react"
import { Link }  from "react-router-dom"
import postlist from "../portfolioEntries.json"


const PostList = () => {

    return (
        <div className="postlist">
            <h1 className="title">All Posts</h1>
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="post-card">
                             <div className="img-container">
                               
                                <h2 className="post-title"><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
                            </div>
                            <small>date {post.date} time {post.time}</small>
                            <hr/>
                            <small><Link className="links" to={`/post/${post.id}`}>Read more</Link></small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList