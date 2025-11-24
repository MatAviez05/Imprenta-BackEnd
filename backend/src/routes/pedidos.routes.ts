import { Router } from 'express';
import PedidosController from '../controllers/pedidosController';
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";

export const routerPedido = Router()

routerPedido.post('/', PedidosController.addPedido)
routerPedido.get('/', PedidosController.getAllPedidos)
routerPedido.get('/mis-pedidos', PedidosController.getPedidoByCliente)
routerPedido.put('/:id', PedidosController.updatePedido)
routerPedido.delete('/:id', PedidosController.deletePedido)

export default routerPedido