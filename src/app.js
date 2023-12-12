import express from "express";
import morgan from "morgan";
import languageRoutes from "./routes/language.routes"

const app = express();

//Settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));

//Routes
app.use(languageRoutes)

export default app;