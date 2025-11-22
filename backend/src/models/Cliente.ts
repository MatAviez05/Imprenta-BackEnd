import mongoose, { Schema } from 'mongoose';
import {Counter} from './Counter'

const clienteSchema = new Schema({
    _id: Number,
    nombre: String,
    empresa: String,
    telefono: String,
    email: String,
    contraseña: String,
    direccion: String,
    tipoUsuario: String
}, {
    timestamps: true
})

clienteSchema.pre('save', async function(next){
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
export const Cliente = mongoose.model('Cliente',clienteSchema)
