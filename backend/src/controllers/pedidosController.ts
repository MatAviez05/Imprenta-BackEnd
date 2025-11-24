import { Pedido } from "../models/Pedido";
import { Cliente } from "../models/Cliente";
import { Request, Response } from 'express'


export class PedidoController{
    
    public async getAllPedidos(req:Request, res:Response){
        try{
            const pedidos = await Pedido.find()
            if(pedidos.length===0){
                return res.status(404).json({error:'No hay pedidos registrados'})
            }
            return res.status(200).json(pedidos)
        }catch{
            return res.status(401).json({error:'Error al obtener datos'})
        }
    }

    public async getPedidoByCliente(req:Request, res:Response){
        try{
            const id = req.params.id 
            const pedidos = await Pedido.find({id_cliente: id})
            if(pedidos.length===0){
                return res.status(404).json({error:'No hay pedidos registrados de ese usuario'})
            }
            return res.status(200).json(pedidos)
        }catch{
            return res.status(401).json({error:'Error al obtener datos'})
        }
    }

    public async addPedido(req:Request, res:Response){
        try{
            const {id_cliente, tipo_trabajo, cantidad, tamaño, color, tipo_papel, estado, observaciones, estado_pago} = req.body

            const cliente = await Cliente.findOne({_id: id_cliente})

            if(!cliente || cliente.tipoUsuario === 'Admin'){
                return res.status(401).json({error: 'No existe un cliente con ese ID'})
            }

            const pedidoNew = new Pedido({
                id_cliente: id_cliente,
                tipo_trabajo: tipo_trabajo,
                cantidad: cantidad,
                tamaño: tamaño,
                color: color,
                tipo_papel: tipo_papel,
                estado: estado,
                observaciones: observaciones,
                estado_pago: estado_pago
            })

            await pedidoNew.save()

            return res.status(201).json(pedidoNew)
        }catch{
            return res.status(401).json({error: 'Error al crear el pedido'})
        }
    }

    public async updatePedido(req:Request, res:Response){
        try{
            const id = req.params.id
            const { tipo_trabajo, cantidad, tamaño, color, tipo_papel, estado, observaciones, estado_pago} = req.body

            const updatePedido = await Pedido.findByIdAndUpdate( 
            id, {
                tipo_trabajo: tipo_trabajo,
                cantidad: cantidad,
                tamaño: tamaño,
                color: color,
                tipo_papel: tipo_papel, 
                estado: estado,
                observaciones: observaciones,
                estado_pago: estado_pago
            })

            if(!updatePedido){
                return res.status(404).json({error: 'No se encontor un pedido con ese ID'})
            }

            return res.status(200).json(updatePedido)
        }catch{
            return res.status(401).json({error: 'Error al actualizar el pedido'})
        }
    }

    public async deletePedido(req:Request, res:Response){
        try{
            const id = req.params.id 
            await Pedido.deleteOne({_id:id})
            .then(()=>{return res.status(204).json({})})
            .catch(()=>{return res.status(404).json({error:'No existe un Pedido con ese ID'})})
        }catch{
            return res.status(401).json({error: 'Error al obtener los datos'})
        }
    }
}

export default new PedidoController