const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// panggl routes
var routes = require("./routes");
routes(app);

app.listen(4000, () => {
  console.log(`Server started on port`);
});
