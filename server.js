
const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/ng2-cribs'));
app.get('/*', function(req,res){
res.sendFile(path.join(__dirname, 'ng2-cribs', 'index.html'))
});

app.listen(process.env.PORT || 8080);
