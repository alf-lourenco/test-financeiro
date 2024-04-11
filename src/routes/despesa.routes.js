const router = require('express').Router();

router.route('/:id').get((req, res) => {
console.log(req.params)
  res.status(201).send(req.params.id);
});

module.exports = router;
