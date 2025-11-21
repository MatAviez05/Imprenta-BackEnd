import { Cliente } from "../models/Cliente"
import {Request, Response } from 'express'
import {ClienteSchema} from '../schemas/clientes.schema';

export class ClienteController{
    public async getAllClientes(req:Request,res:Response){
        try{
            const clientes = await Cliente.find({tipoUsuario: 'Cliente'})
            if(clientes.length===0){
                return res.status(404).json({error:'No hay clientes registrados'})
            }
            return res.status(200).json(clientes)
        }catch{
            return res.status(401).json({error:'Error al obtener datos'})
        }
    }

    public async addCliente(req:Request,res:Response){
        const parse = ClienteSchema.safeParse(req.body)
        if(!parse.success){
            return res.status(400).json({error:'validationError', detail: 'Faltan datos'})
        }
        try{
            const{nombre,empresa,telefono,email,password,direccion,tipoUsuario} = req.body
            const clienteNew = new Cliente({
                nombre: nombre,
                empresa: empresa,
                telefono: telefono,
                email: email,
                password: password,
                direccion: direccion,
                tipoUsuario: tipoUsuario
            })

            await clienteNew.save()

            return res.status(201).json(clienteNew)
        }catch{
            return res.status(401).json({error: 'Error al obtener los datos'})
        }
    }
    public async updateCliente(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const parse = ClienteSchema.safeParse(req.body);
            
            if (!parse.success) {
                return res.status(400).json({ error: 'validationError', detail: 'Datos inválidos' });
            }

            const { nombre, empresa, telefono, email, direccion, tipoUsuario } = req.body;

            const clienteActualizado = await Cliente.findByIdAndUpdate(
                id,
                {
                    nombre,
                    empresa,
                    telefono,
                    email,
                    direccion,
                    tipoUsuario
                },
                { new: true, runValidators: true }
            );

            if (!clienteActualizado) {
                return res.status(404).json({ error: 'Cliente no encontrado' });
            }

            return res.status(200).json(clienteActualizado);
        } catch {
            return res.status(401).json({ error: 'Error al actualizar los datos' });
        }
    }

    public async deleteCliente(req:Request, res:Response){
        try{
            const id = req.params.id 
            await Cliente.deleteOne({_id:id})
            .then(()=>{return res.status(204).json({})})
            .catch(()=>{return res.status(404).json({error:'No existe un turno con ese ID'})})
        }catch{
            return res.status(401).json({error: 'Error al obtener los datos'})
        }
    }

}

export default new ClienteController