var path = require("path");

module.exports = function(app) {

    app.get("/survey", function(req, res) {
        // route that displays the survey page
        res.sendFile(path.join(_dirname, "../public/survey.html"))
    });
    
    app.get("*", function (req, res) {
        // default route that leads to home.html which displays the home page
        res.sendFile(path.join(_dirname, "../public/home.html"))
    })


}

