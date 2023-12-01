var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const poeple = [
    {
      id: 1,
      name: "A"
    },
    {
      id: 2,
      name: "B"
    }
  ]
  res.render('home', { title: 'NIYAD', poeple });
});

module.exports = router;
