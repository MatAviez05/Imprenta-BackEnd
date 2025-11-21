import { z } from 'zod';

export const ClienteSchema = z.object({
    nombre:z.string(),
    empresa: z.string(),
    telefono: z.string(),
    email: z.email(),
    direccion: z.string(),
    tipoUsuario: z.string()

})