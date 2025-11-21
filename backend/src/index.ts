import Server from "./app";
import { connectDB } from "./config/database";

const port = +(process.env.PORT || 3000)

connectDB()

const server = new Server(port);
server.start(()=>{
    console.log(`on port ${port}`);
    
})