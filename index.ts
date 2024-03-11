import routes from "./src/routes/index";
const express = require("express");
const cors = require("cors");
import colors from "colors";
require("dotenv").config();
const app = express();
const port =  8181;
app.use(cors());
app.use(express.json({ limit: "5000mb" }));


app.use("/", routes);
app.use(express.json());

app.listen(port, () => {
  console.log(
    colors.yellow.bold(
      `API Server is listening at http://localhost:${port}`
    )
  );
});

module.exports = app;
