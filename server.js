import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import connection from "./database/Db.js";
import ImportData from "./Default.js";
import router from "./routes/Routes.js";
import route from "./routes/UserRoutes.js";
import routeorder from "./routes/OrderRoutes.js";

dotenv.config();

//db
connection();

const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Route
app.use("/api/pizzas", router);
app.use("/api/users", route);
app.use("/api/orders", routeorder);

app.get("/", (req, res) => {
  res.send("Node App Running");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is Running on Port", PORT);
});

ImportData();
