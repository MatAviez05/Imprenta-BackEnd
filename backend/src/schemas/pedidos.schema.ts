import { z } from 'zod';

export const PedidosSchema = z.object({
    id_cliente: z.number(),
    tipo_trabajo: z.string(),
    cantidad: z.number(),
    tamaño: z.string(),
    color: z.string(),
    tipo_papel: z.string(),
    estado: z.string(),
    observaciones: z.string(),
    estado_pago: z.string()
    
})

export const PedidosSchemaUpdate = z.object({
    tipo_trabajo: z.string().optional(),
    cantidad: z.number().optional(),
    tamaño: z.string().optional(),
    color: z.string().optional(),
    tipo_papel: z.string().optional(),
    estado: z.string().optional(),
    observaciones: z.string().optional(),
    estado_pago: z.string().optional()
    
})