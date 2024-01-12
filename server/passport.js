import passport from 'passport';
import dotenv from 'dotenv'
import GoogleStrategy from 'passport-google-oauth20'
GoogleStrategy.Strategy

import GitHubStrategy from 'passport-github2' 
GitHubStrategy.Strategy

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://google-auth-backend1.onrender.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile);
  }
));


passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null,profile);
}
));


passport.serializeUser((user,done) =>{
    done(null,user)
})

passport.deserializeUser((user,done) =>{
    done(null,user);
});

export default passport

