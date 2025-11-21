import { z } from 'zod';

export const ClienteSchema = z.object({
    nombre: z.string(),
    empresa: z.string(),
    telefono: z.string(),
    email: z.email(),
    contraseña: z.string(),
    direccion: z.string(),
    tipoUsuario: z.string()

})