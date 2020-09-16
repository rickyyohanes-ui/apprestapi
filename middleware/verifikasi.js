const jwt = require('jsonwebtoken');
const config = require ('../config/secret');


// verifikasi
function verifikasi(roles){
   return function (req,res,next){
        //cek auth header
        var tokenwithBearer = req.headers.authorization;

        // console.log(tokenwithBearer);

        if(tokenwithBearer){
            var token = tokenwithBearer.split(' ')[1];
            // verifikasi
            jwt.verify(token, config.secret, function(err, decoded){
                if(err){
                    return res.status(401).send({auth:false, message:'token tidak terdaftar'})
                }else{
                    if(roles==2){
                        req.auth = decoded;
                        next();
                    }else{
                        return res.status(401).send({auth:false, message:'gagal mengotorasi role anda'})
                    }
                }
            });
        }else{
            return res.status(401).send({auth:false, message:'token tidak tersedia'})
        }
   } 
}

module.exports = verifikasi;