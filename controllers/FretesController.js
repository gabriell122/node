const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarFretes(request, response){
        try{
            const sql = 'SELECT fre_id, ent_id, fre_data_finalizacao, fre_status, fre_observacoes FROM Fretes;';
            const Fretes = await db.query(sql)
            return response.status(200).json(Fretes[0]);
        } catch(error){
            return response.status(500).json({listar: 'Erro', message: error});
        }
    },
    async listarFretesId (request, response){
        
        try{
            
            const sql = ' SELECT fre_id, ent_id, fre_data_finalizacao, fre_status, fre_observacoes FROM Fretes WHERE fre_id = ? ;';
            const Fretes = await db.query(sql,[request.params.id])
            return response.status(200).json(Fretes[0]);
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
