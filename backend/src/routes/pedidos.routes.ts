import { Router } from 'express';
import PedidosController from '../controllers/pedidosController';
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";

export const routerPedido = Router()

routerPedido.post('/', verifyTokenMiddleware, PedidosController.addPedido)
routerPedido.get('/', PedidosController.getAllPedidos)
routerPedido.get('/mis-pedidos/:id', verifyTokenMiddleware, PedidosController.getPedidoByCliente)
routerPedido.put('/:id', verifyTokenMiddleware, PedidosController.updatePedido)
routerPedido.delete('/:id', verifyTokenMiddleware, PedidosController.deletePedido)

export default routerPedido