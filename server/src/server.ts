import "dotenv/config"
import express ,{Request,Response}from 'express'
import cors from "cors";
import morgan from "morgan";

const PORT = process.env.PORT
const logger = morgan("dev")
class App {
       public application: express.Application;
       constructor() {
              this.application = express();
       }
}
const app = new App().application;

app.use(cors());
app.use(logger)
app.post("/",(req:Request,res:Response)=>res.send("hi"))

app.listen(PORT, () => console.log(`✅The server is now listen on port ${PORT}🚀`));          