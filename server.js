const express = require('express');
const bodyParser = require('body-Parser');
const port = process.env.PORT || 8000;
const knex = require('./db/knex');


const  app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/todos', function(req, res){
  knex.row('select * from todos').then(function(todos){
    res.send(todos.rows)
  })
})

app.listen(port, function(){
  console.log("listening on port:", port);
})
//countinue the vedio from 3 leve and test the localhost as well
