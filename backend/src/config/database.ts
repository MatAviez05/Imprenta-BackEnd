import mongoose from "mongoose";

const port_DB = +(process.env.PORT_DATABASE || 27017)

export async function connectDB() {
  try {
    mongoose.connect(`mongodb://localhost:${port_DB}/Imprenta`)
    .then(() => console.log('✅ Conectado a MongoDB'));
  } catch (error) {
    console.error("❌ Error al conectar MongoDB:", error);
  }
}