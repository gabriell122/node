const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarUsuarios(request, response){
        try{
            return response.status(200).json({listar: 'Usuarios'});
        } catch(error){
            return response.status(500).json({listar: 'Erro', message: error});
        }
    },
    async inserirUsuarios(request, response){
        try{
            return response.status(200).json({inserir: 'Usuarios'});
        } catch(error){
            return response.status(500).json({inserir: 'Erro', message: error});
        }
    },
    async alterarUsuarios(request, response){
        try{
            return response.status(200).json({alterar: 'Usuarios'});
        } catch(error){
            return response.status(500).json({alterar: 'Erro', message: error});
        }
    },
    async deletarUsuarios(request, response){
        try{
            return response.status(200).json({deletar: 'Usuarios'});
        } catch(error){
            return response.status(500).json({deletar: 'Erro', message: error});
        }
    },
    
}
