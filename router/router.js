var express = require("express");
const path = require('path');
var bodyParser = require("body-parser");
var mysql = require("mysql");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var indexRouter = require("../controller/indexRouter");
var chap1Router = require("../controller/chap1Router");
var chap2Router = require("../controller/chap2Router");
var chap3Router = require("../controller/chap3Router");
var chap4Router = require("../controller/chap4Router");
var testRouter = require("../controller/testRouter");
var imageRouter = require("../controller/imageRouter");
var contactRouter = require("../controller/contactRouter");
var dataRouter = require("../controller/dataRouter");
var dataTestRouter = require("../controller/dataTestRouter");

var router = express.Router();
    //router page
    router.get('/',indexRouter.mathfun); 
    router.get('/Mathfun.ejs',indexRouter.mathfun);
    router.get('/Trangchu.ejs', indexRouter.trangchu);
    router.get('/Luyentap.ejs', indexRouter.luyentap);
    router.get('/Kiemtra.ejs', indexRouter.kiemtra);
    router.get('/Giaitri.ejs', indexRouter.giaitri);
    router.get('/Lienhe.ejs', indexRouter.lienhe);
    
    
    //router chương 1 Luyện tập
    router.get('/Demden10.ejs', chap1Router.dem);
    router.get('/Hinhhoccoban.ejs', chap1Router.hinh);
    
    
    //router chương 2 Luyện tập
    router.get('/Congphamvi10.ejs', chap2Router.cong);
    router.get('/Trutrongphamvi10.ejs', chap2Router.tru);
    router.get('/Tichhopcongtru.ejs', chap2Router.tichhop);
    
    
    //router chương 3 Luyện tập
    router.get('/Nhandien10to100.ejs', chap3Router.nhandien);
    router.get('/Nhoso1to100.ejs', chap3Router.nhoso);
    
    
    //router chương 4 Luyện tập
    router.get('/Congphamvi100.ejs', chap4Router.cong);
    router.get('/Trutrongphamvi100.ejs', chap4Router.tru);
    router.get('/Bieuthuctichhop.ejs', chap4Router.tichhop);
    
    
    //router kiểm tra
    router.get('/De1.ejs', testRouter.de1);
    router.get('/De2.ejs', testRouter.de2);
    router.get('/De3.ejs', testRouter.de3);
    router.get('/De4.ejs', testRouter.de4);
    router.get('/De5.ejs', testRouter.de5);
    
    //router ảnh
    router.get('/public/images/:image_name', imageRouter.image);
    
    //router liên hệ
    router.post("/lienhe",urlencodedParser,contactRouter.contact);
    
    //router data luyện tập
    router.get("/data/:group/:chap",dataRouter.dataLuyentap);

    //router data kiểm tra
    router.get("/dataKiemtra/:group",dataTestRouter.dataKiemtra);

module.exports = router;


