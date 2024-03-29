const router = require("express").Router();
const User = require("../models/User")
const CryptoJs = require("crypto-js")
const jwt = require("jsonwebtoken")
// Registration
router.post("/register", async (req, res) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(
            req.body.password, process.env.PASS_SEC
            )
            .toString()
    });
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)       
    } catch (error) {
        
        res.status(500).json(error);
    }

});

// // Login
router.post("/login", async (req, res)=>{
    try {
        
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );
        //if no user
        // !user && res.status(401).json("Wrong Username");
        if(!user){
            res.status(401).json("Wrong Username");
            return;
        }
        const hashedPass = CryptoJs.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const originalPassword = hashedPass.toString(CryptoJs.enc.Utf8);

        // originalPassword !== req.body.password && 
        //    res.status(401).json("Wrong Password");
            if(originalPassword !== req.body.password){
                res.status(401).json("Wrong Password");
                return;
            }
            
            const accessToken = jwt.sign({
                id:user._id, 
                isAdmin: user.isAdmin
            }, process.env.JWT_SEC,
            {expiresIn:"3d"}
        );

        const{password, ...others} = user._doc;

        res.status(200).json({...others, accessToken});
        
    }
    catch (err) {
        console.log(err);
    }
});


module.exports = router;