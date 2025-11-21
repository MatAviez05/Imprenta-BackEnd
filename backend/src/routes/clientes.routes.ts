import { Router } from 'express';
import ClientesController from '../controllers/clienteController'


export const routerClientes = Router()
routerClientes.post('auth/register',ClientesController.addCliente)
//implementar el login
routerClientes.put('/:id',ClientesController.updateCliente)
routerClientes.get('/list-clientes',ClientesController.getAllClientes)
routerClientes.delete('/id', ClientesController.deleteCliente)