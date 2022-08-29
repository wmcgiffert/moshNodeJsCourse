function authentication (req, res, next){
    console.log("Authenticating user.......");
    next();
}
function authentication2 (req, res, next){
    console.log("Authenticating user.......");
    next();
}

module.exports = {
    authentication,
    authentication2
}; 