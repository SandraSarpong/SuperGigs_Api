import express from "express";
import { setUpRoutes } from "./startUp/registerRoutes.js";
import { setupDb } from "./startUp/intergrateDb.js";

const app = express();

setUpRoutes(app);
setupDb();

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server has started on port ${port}`));
