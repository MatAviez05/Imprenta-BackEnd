import { Router } from 'express';
import ClientesController from '../controllers/clienteController'

export const routerClientes = Router()

routerClientes.post('/auth/register', ClientesController.addCliente)
routerClientes.post('/auth/login',ClientesController.login )
routerClientes.get('/list-clientes', ClientesController.getAllClientes)
routerClientes.delete('/:id', ClientesController.deleteCliente)

export default routerClientes