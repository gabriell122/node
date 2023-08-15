const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarVeiculos (request, response){
        
        try{
            const sql = 'SELECT vei_id, ent_id, vei_modelo, vei_marca, vei_placa, vei_ano, vei_cor, vei_tipo FROM Veiculos;';
            const Enderecos = await db.query(sql)
            return response.status(200).json(Enderecos[0]);
        } catch(error){
            return response.status(500).json({listar: 'Erro', message: error});
        }
    },
    async listarVeiculosId (request, response){
        
        try{
            
            const sql = 'SELECT vei_id, ent_id, vei_modelo, vei_marca, vei_placa, vei_ano, vei_cor, vei_tipo FROM Veiculos WHERE vei_id = ? ;';
            const Enderecos = await db.query(sql,[request.params.id])
            return response.status(200).json(Enderecos[0]);
        } catch(error){
            return response.status(500).json({listar: 'Erro', message: error});
        }
    },
    async inserirVeiculos(request, response){
        try{
            return response.status(200).json({inserir: 'Veiculos'});
        } catch(error){
            return response.status(500).json({inserir: 'Erro', message: error});
        }
    },
    async alterarVeiculos(request, response){
        try{
            return response.status(200).json({alterar: 'Veiculos'});
        } catch(error){
            return response.status(500).json({alterar: 'Erro', message: error});
        }
    },
    async deletarVeiculos(request, response){
        try{
            return response.status(200).json({deletar: 'Veiculos'});
        } catch(error){
            return response.status(500).json({deletar: 'Erro', message: error});
        }
    },
    
}
