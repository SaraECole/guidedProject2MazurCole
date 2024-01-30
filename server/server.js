const express = require("express");
const dao = require("./data_access");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json()); //Parse JSON body

app.get("/api/planets", function (req, res) {
  dao.call("findAllPlanets", {}, (result) => {
    if (result.planets !== undefined) {
      res.send(result.planets);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

const port = 3000;
console.log("server starting on port: " + port);
app.listen(port);