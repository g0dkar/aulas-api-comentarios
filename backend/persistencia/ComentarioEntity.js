import mongoose from 'mongoose'

const ComentarioSchema = new mongoose.Schema({
    idPai: { type: String },
    texto: { type: String, required: true },
    pontos: { type: Number, required: true },
    dataHora: { type: Date, required: true },
})

const ComentarioEntity = mongoose.model('Comentario', ComentarioSchema)

export default ComentarioEntity
