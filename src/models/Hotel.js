import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
    nome: String,
    rua:String,
    numero:Number,
    bairro:String,
    cep: Number,
    cidade: String,
    uf:String,
    qtdeAptos:Number,
    valorDiaria:Number,
    create_at:Date,

});



export default mongoose.model('Hotel', HotelSchema);