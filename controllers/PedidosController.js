const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarPedidos(request, response){
        try{
            return response.status(200).json({listar: 'Pedidos'});
        } catch(error){
            return response.status(500).json({listar: 'Erro', message: error});
        }
    },
    async inserirPedidos(request, response){
        try{
            return response.status(200).json({inserir: 'Pedidos'});
        } catch(error){
            return response.status(500).json({inserir: 'Erro', message: error});
        }
    },
    async alterarPedidos(request, response){
        try{
            return response.status(200).json({alterar: 'Pedidos'});
        } catch(error){
            return response.status(500).json({alterar: 'Erro', message: error});
        }
    },
    async deletarPedidos(request, response){
        try{
            return response.status(200).json({deletar: 'Pedidos'});
        } catch(error){
            return response.status(500).json({deletar: 'Erro', message: error});
        }
    },
    
}
