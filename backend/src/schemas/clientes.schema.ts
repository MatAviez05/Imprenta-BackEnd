import { z } from 'zod';

export const ClienteSchema = z.object({
    nombre: z.string(),
    empresa: z.string(),
    telefono: z.string(),
    email: z.email(),
    contraseña: z.string().optional(),
    direccion: z.string(),
    tipoUsuario: z.string()

})

export const ClienteSchemaUpdate = z.object({
    nombre: z.string().optional(),
    empresa: z.string().optional(),
    telefono: z.string().optional(),
    email: z.email().optional(),
    direccion: z.string().optional(),
    tipoUsuario: z.string().optional()

})