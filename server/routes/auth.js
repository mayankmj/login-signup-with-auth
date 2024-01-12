// const router = require("express").Router()
// const passport = require("passport")
import  express  from "express";
import passport from "passport"
import dotenv from 'dotenv'
const router = express.Router();

dotenv.config();

const Client_Url=process.env.CLIENT_URL

router.get("/login/failed" ,(req,res) =>{
    res.status(401).json({
        success: failure,
        message: "failure"
    });
});

router.get("/login/success" ,(req,res) =>{
    if(req.user){
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
            // cookies: req.cookies
        })
    }
});

router.get("/logout", (req,res) => {
    req.logout();
    res.redirect(Client_Url)
})


router.get("/google",passport.authenticate("google",{scope : ["profile"]}));

router.get("/google/callback",passport.authenticate("google",{
    successRedirect: Client_Url,
    failureRedirect: "/login/falied"
}))


router.get("/github",passport.authenticate("github",{scope : ["profile"]}));

router.get("/github/callback",passport.authenticate("github",{
    successRedirect: Client_Url,
    failureRedirect: "/login/falied"
}))

export default router;