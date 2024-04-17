import mongoose from "mongoose";

const connection = {};

// Método para conectarnos a la B.D
export const connectToDb = async () => {
    try {
        // Antes de conectarnos chequear si ya hay una conexión activa...
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }

        // Caso contrario, conectarnos
        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};