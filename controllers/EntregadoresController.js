const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarEntregadores(request, response){
        try{
            const sql = 'SELECT ent_id, usu_id, ent_cnh_frente, ent_cnh_verso, ent_avaliacao, ent_comentario, ent_nacionalidade, ent_naturalidade, ent_nome_mae, ent_nome_pai FROM Entregadores;';
            const entregadores = await db.query(sql)
            return response.status(200).json({listar: 'entregadoress',entregadores });
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
