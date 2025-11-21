declare namespace NodeJS{
    interface ProcessEnv{
        //declarar las variables de entorno aca para que typescript las reconozcan
        readonly PORT?: string
    }
}