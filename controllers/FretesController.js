const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarFretes(request, response){
        try{
            return response.status(200).json({confirma: 'Fretes'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
}