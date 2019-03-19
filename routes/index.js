var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('index.html', {locals: {title: 'Welcome!'}})
});




module.exports = router;
//# sourceMappingURL=index.js.map