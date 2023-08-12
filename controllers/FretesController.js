const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarFretes(request, response){
        try{
            return response.status(200).json({listar: 'Fretes'});
        } catch(error){
            return response.status(500).json({listar: 'Erro', message: error});
        }
    },
    async inserirFretes(request, response){
        try{
            return response.status(200).json({inserir: 'Fretes'});
        } catch(error){
            return response.status(500).json({inserir: 'Erro', message: error});
        }
    },
    async alterarFretes(request, response){
        try{
            return response.status(200).json({alterar: 'Fretes'});
        } catch(error){
            return response.status(500).json({alterar: 'Erro', message: error});
        }
    },
    async deletarFretes(request, response){
        try{
            return response.status(200).json({deletar: 'Fretes'});
        } catch(error){
            return response.status(500).json({deletar: 'Erro', message: error});
        }
    },
    
}
