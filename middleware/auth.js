// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// module.exports = function (req, res, next) {
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.starstWith("bearer")
//   ) {
//     const token = req.headers.authorization.split(" ")[1];
//     if (token == null) {
//       res.sendStatus(401); //not autherized
//       jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
//         if (err) res.sendStatus(403); //forbidoen
//         req.user = user;
//         next();
//       });
//     }
//   } else {
//     res.sendStatus(401);
//   }
// };
const jwt =require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req,res,next){
    if(req.headers.authorization && req.headers.authorization.startsWith('bearer'))
    {
        const token = req.headers.authorization.split(' ')[1];
        if(token==null) res.sendStatus(401)
        jwt.verify(token,process.env.TOKEN_KEY,(err,user)=>{
            if(err) res.sendStatus(403)
            req.user = user;
            next();
        });

    }else
    res.sendStatus(401)

}