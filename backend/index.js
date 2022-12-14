const connectToMongo = require("./db");
const express = require("express");
connectToMongo();

const app = express();
const port = 6000;

app.use(express.json());

//Available Routes
app.use("/api/auth/", require("./routes/auth"));
app.use("/api/form/", require("./routes/form"));

app.listen(port, () => {
  console.log(`Text Free PKM Portal Backend listening on port http://localhost:${port}`);
});
