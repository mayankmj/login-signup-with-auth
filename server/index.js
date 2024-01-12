import express from 'express'
import passport from 'passport'
import cookieSession from 'cookie-session'
import cors from 'cors';
import passportSetup from "./passport.js"
import authRoute from "./routes/auth.js"
import dotenv from 'dotenv'
const app = express()

dotenv.config()

const Client_Url = process.env.CLIENT_URL;
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
        origin: `${Client_Url}`,
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    }
))

app.use("/auth",authRoute);

app.listen("5000",()=>{
    console.log("ready");
})