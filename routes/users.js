var express = require('express');
var router = express.Router();

const usersArr = [
  {
    id: 1,
    name: "A",
  },
  {
    id: 2,
    name: "B",
  },
  {
    id: 3,
    name: "C",
  },
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(usersArr);
});

/* GET user BY ID listing. */
router.get('/:id', function (req, res, next) {
  const id = req.params.id
  res.json(usersArr.find(it => it.id == id));
});


/* update user listing. */
router.put('/update/:id', function (req, res, next) {
  const id = req.params.id
  const data = req.body
  console.log(data);

  res.json(data);
});

/* delete users listing. */
router.delete('/delete/:id', function (req, res, next) {
  const id = req.params.id


  res.json(users.filter(it => +it.id !== +id));
});

module.exports = router;
