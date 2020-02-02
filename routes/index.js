const express = require("express");
const router = express.Router();

router.get('/',(req, res, next)=>{
    if(req.body.page_status)
        req.session.page_status = req.body.page_status;

    res.render("index", { page_status : req.session.page_status });
});

router.post('/',(req, res, next)=>{
    
    req.session.page_status = undefined;

    res.render("index", { page_status : req.session.page_status });
});

module.exports = router;