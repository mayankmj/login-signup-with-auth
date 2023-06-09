import express from 'express'
import passport from 'passport'
import cookieSession from 'cookie-session'
import cors from 'cors';
// const passportSetup = require("./passport"); 
// import passportSetup from './passport.js';
// require("./passport")
// import passport from 'passport';
import passportSetup from "./passport.js"
import authRoute from "./routes/auth.js"
const app = express()

app.use(cookieSession({
    name:"session",
    keys:["mayank"],
    maxAge: 24*60*60*100
}
))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors(
    {
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    }
))

app.use("/auth",authRoute);

app.listen("5000",()=>{
    console.log("ready");
})