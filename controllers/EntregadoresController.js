const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarEntregadores(request, response){
        try{
            return response.status(200).json({listar: 'Entregadores'});
        } catch(error){
            return response.status(500).json({listar: 'Erro', message: error});
        }
    },
    async inserirEntregadores(request, response){
        try{
            return response.status(200).json({inserir: 'Entregadores'});
        } catch(error){
            return response.status(500).json({inserir: 'Erro', message: error});
        }
    },
    async alterarEntregadores(request, response){
        try{
            return response.status(200).json({alterar: 'Entregadores'});
        } catch(error){
            return response.status(500).json({alterar: 'Erro', message: error});
        }
    },
    async deletarEntregadores(request, response){
        try{
            return response.status(200).json({deletar: 'Entregadores'});
        } catch(error){
            return response.status(500).json({deletar: 'Erro', message: error});
        }
    },
    
}
