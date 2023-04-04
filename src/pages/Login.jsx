// import Google from "../components/img/google.png"

const Login = () =>{
    const google_url="https://raw.githubusercontent.com/safak/youtube/react-social-login/client/src/img/google.png";
    const github_url="https://raw.githubusercontent.com/safak/youtube/react-social-login/client/src/img/github.png";
    
    const facebook_url="https://raw.githubusercontent.com/safak/youtube/react-social-login/client/src/img/facebook.png";
    
    const google = () =>{
      window.open("http://localhost:5000/auth/google")
    }

    const github = () =>{
      window.open("http://localhost:5000/auth/github")
    }
    
    return(
        <div className="">
         {/* <h1 className="loginTitle">Choose the preferred Login option</h1> */}
         <div className="wrapper">
            <div className="left">
              <div className="loginButton" onClick={google}>
                <img src={google_url} alt="" className="icon google" />
                 Google
              </div>

              <div className="loginButton" onClick={github}>
                <img src={github_url} alt="" className="icon facebook" />
                 github
              </div>

              <div className="loginButton">
                <img src={facebook_url} alt="" className="icon github" />
                 Facebook
              </div>
            </div>
            <div className="center">
                <div className="line" />
                <div className="or">OR</div>
            </div>
            <div className="right">
              <input type="type" placeholder="username" />
              <input type="type" placeholder="password" />
              <button className="submit">Login</button>
            </div>
         </div>
        </div>
    )
}

export default Login