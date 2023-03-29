

const Navbar = () => {
    const url="https://avatars.githubusercontent.com/u/81777768?s=96&v=4";
    return(
        <div className="navbar">
           <spam className="logo">Sample App</spam>
              <ul className="list">
                 <li className="listItem">
                    <img src={url} alt="" className="avatar"/>
                 </li>
                 <li className="listItem">Mayank</li>
                 <li className="lsitItem">Logout</li>
              </ul>
        </div>
    )
}

export default Navbar;