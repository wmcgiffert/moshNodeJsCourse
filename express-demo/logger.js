function log (req, res, next){
    console.log("Logging.....");
    console.log(req.path);
    next();
}

module.exports = log;