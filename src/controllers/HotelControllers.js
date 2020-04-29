import mongoose from 'mongoose';


import Hotel from '../models/Hotel';

class HotelController {
    async index(req, res) {
        const hoteis = await Hotel.find();

        return res.json(hoteis);
    }

    async show(req, res) {
        const id = req.params.id;
        const hotel = await Hotel.findById(id);
        return res.json(hotel);
    }

    async store(req, res) {
        const{nome,rua,numero,bairro,cep,cidade,uf,qtdeAptos,valorDiaria} = req.body;
        const hotel = await Hotel.create(nome,
            rua,
            numero,
            bairro,
            cep,
            cidade,
            uf,
            qtdeAptos,
            valorDiaria);
        return res.json(hotel);
    }
    async update(req, res) {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(hotel);
    }
    async destroy(req, res) {
        const hotel = await Hotel.findByIdAndRemove(req.params.id);
        return res.send();
    }
}

export default new HotelController();