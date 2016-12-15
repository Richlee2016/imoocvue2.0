/**
 * Created by dell on 2016/10/12.
 */
var express = require('express');
var UserModel = require('../models/User');
var ProductModel = require('../models/Product');
var router = express.Router();
var responseData;
function responseDataFn(code,message){
  var code = code? code:0;
  var message = message? message:"";
  responseData={
    code:code,
    message:message
  }
};
router.use(function(req,res,next){
    responseDataFn();
    next();
});
//增
router.post('/user/register',function(req,res,next){
    var UserEntity = new UserModel({
      username:req.body.username,
      password:req.body.password
    });
    //查
    UserModel.findOne({username:req.body.username},function(err,doc){
      //console.log(doc);
      if(err){
        console.log(出错);
      }
      if(!doc){
        //保存
        UserEntity.save(function(err){
          if(err){
            console.log("注册出错");
            return;
          };
          res.json({code:4,mes:"注册成功"});
          return;
        });
      }else{
        res.json({code:5,mes:"该账号已被注册"});
      };
    });
});
//查
router.post('/user/login',function(req,res,next){
  //保存
  console.log(req.body.username,req.body.password);
  UserModel.findOne({username:req.body.username},function(err,doc){
      console.log(doc);
      if(err){
        console.log(出错);
      }
      if(doc){
        if(doc.password ==req.body.password ){
          res.json({code:1,mes:"登陆成功"});
          return;
        }else{
          res.json({code:2,mes:"密码错误"});
          return;
        };
      }else{
          res.json({code:3,mes:"账号不存在"});
          return;
      };
  });
});

//所有的账号和密码
router.get('/user/message',function(req,res,next){
  UserModel.find(function(err,usersMes){
    if(err){
      conosle.log(err);
    }
    res.json(usersMes);
  })
});

router.get('/product/all',function(req,res,next){
  ProductModel.find(function(err,products){
    if(err){
      console.log(err);
    }
    console.log('find goods');
  });
});



module.exports = router;
