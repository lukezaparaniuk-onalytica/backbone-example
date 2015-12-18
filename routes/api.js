var express = require('express');
var router = express.Router();

router.get('/data', function(req, res, next) {
  
  var data = [
    { id: 1, name: "Sensor #1", value: Math.random() },
    { id: 2, name: "Sensor #2", value: Math.random() },
    { id: 3, name: "Sensor #3", value: Math.random() }    
  ]
  
  res.send(data);
});

module.exports = router;