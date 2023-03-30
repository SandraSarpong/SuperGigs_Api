import express from "express";
import { setUpRoutes } from "./startUp/registerRoutes.js";
import { setupDb } from "./startUp/intergrateDb.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

setUpRoutes(app);
setupDb();

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server has started on port ${port}`));
