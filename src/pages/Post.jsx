
import { useLocation } from "react-router-dom"
import { posts } from "../data"
const Post = () =>{
  const location = useLocation()
  console.log(location);
  const path =location.pathname.split("/")[2]
  const post = posts.find((p)=> p.id.toString() === path)
    return(
        <div className="post">
           <img src={post.img} alt="" className="postImg" />
           <h1 className="postTitle">{post.title}</h1>
           <p className="postDesc">{post.longDesc}</p>
           <p className="postLongDesc"></p>
        </div>
    )
}

export default Post