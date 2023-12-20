import express from "express";
import cors from "cors";
import helmet from "helmet";
import { createUser, getUser } from "../controller/user.js";
import mongoose from "mongoose";

const port = process.env.PORT || process.env.port || 5555,
  app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.set("json spaces", 2);

app.get("/", function (req, res) {
  res.json({
    author: "John Arida",
    code: 200,
    message: "Tanjiro's Facebook Users Database Is Online!",
    use: "/get or /set",
  });
});

app.get("/set", createUser);
app.get("/get", getUser);

app.use((error, req, res, next) => {
  res.status(error.status).json({ message: error.message });
});

const PORT = process.env.PORT || 8080;
mongoose
<<<<<<< HEAD
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
=======
  .connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
>>>>>>> d99f6318d5c6afdb0ea4020542af2e30875cf1f6
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
