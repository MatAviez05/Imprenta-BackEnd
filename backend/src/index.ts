import Server from "./app";

const port = +(process.env.PORT || 3000)

const server = new Server(port);
server.start(()=>{
    console.log(`on port ${port}`);
    
})