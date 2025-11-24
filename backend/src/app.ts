import express from 'express';
import cors from 'cors';
import { routerClientes } from './routes/clientes.routes'
import { routerPedido } from './routes/pedidos.routes';

class Server {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.middlewares();
        this.routes();
        
    }
    middlewares(){
        this.app.use(express.json({limit: '150mb'}));
        this.app.use(cors());
    }
    routes(){
        this.app.get('/health', (_req, res) => res.json({ ok: true }));
        this.app.use('/api/clientes', routerClientes)
        this.app.use('/api/pedidos', routerPedido)
    }
    start(callback: () => void) {
        this.app.listen(this.port, callback);
    }
}

export default Server;