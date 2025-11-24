import mongoose, { Schema } from 'mongoose';
import {Counter} from './Counter'

const pedidoSchema = new Schema({
    _id: Number,
    id_cliente: Number,
    tipo_trabajo: String,
    cantidad: Number,
    tamaño: String,
    color: String,
    tipo_papel: String,
    estado: String,
    observaciones: String,
    estado_pago: String
}, {
    timestamps: true
})

pedidoSchema.pre('save', async function(next){
    if(this.isNew){
        const counter = await Counter.findByIdAndUpdate(
            {_id: 'turnoId'},
            {$inc:{seq:1}},
            {new: true, upsert:true}
        );
        this._id = counter!.seq;
    }
    next();
})
export const Pedido = mongoose.model('Pedido', pedidoSchema)
