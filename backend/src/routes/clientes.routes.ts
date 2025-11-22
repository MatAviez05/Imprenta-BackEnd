import { Router } from 'express';
import ClientesController from '../controllers/clienteController'
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";

export const routerClientes = Router()

routerClientes.post('/auth/register', ClientesController.addCliente)
routerClientes.post('/auth/login', ClientesController.login )
routerClientes.get('/list-clientes', verifyTokenMiddleware, ClientesController.getAllClientes)
routerClientes.put('/:id',verifyTokenMiddleware, ClientesController.updateCliente)
routerClientes.delete('/:id', verifyTokenMiddleware ,ClientesController.deleteCliente)

export default routerClientes