import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path"

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../client/build")));
// app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server listening on port 3001");
});

export default app;