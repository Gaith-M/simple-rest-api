require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const db = mongoose.connection;
const PORT = process.env.PORT || 4000;

// =======================
//      Middlewares
// =======================
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// =======================
//        Routing
// =======================
app.use("/api/todos", require("./routes/index"));

// =======================
//    Production mode
// =======================
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  );
}

// =======================
// Handle unexpected reqs
// =======================
app.use(require("./middlewares/not_found"));

// =======================
//    Connecting to DB
// =======================
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: false,
});
db.once("open", () => console.log("connection established"));
db.on("error", () => console.log("Error"));
// =======================
//      Hook-up server
// =======================
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
