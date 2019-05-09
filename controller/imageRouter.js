const path = require('path');
module.exports.image = function (req, res) {
        var image = req.params.image_name;
        res.sendFile(path.join(__dirname,'..', '/public/images/',image));
    };
