import server from "./app";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import router from "./router";

const PORT = process.env.PORT || 3001;
const { MONGO_URL } = process.env;

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

// Conexion a la base de datos de MongoDB
mongoose.connect(`${MONGO_URL}`);
mongoose.connection.on("connected", () => console.log("Database connected"));
mongoose.connection.on("error", (error: Error) => console.log(error));

server.use("/", router());
