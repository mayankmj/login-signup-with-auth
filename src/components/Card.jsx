


const Card = ({post}) =>{
    return(
        <div className="card">
          <span className="title">
            {post.title}
          </span>
          <img src={post.img} alt="" className="img" />

          <p className="desc">{post.desc}</p>
          <button className="cardbutton">Read More</button>
        </div>
    )
}

export default Card