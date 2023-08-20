const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarVeiculos (request, response){
        
        try{
            const sql = 'SELECT vei_id, ent_id, vei_modelo, vei_marca, vei_placa, vei_ano, vei_cor, vei_tipo FROM Veiculos;';
            const Veiculos = await db.query(sql)
            return response.status(200).json(Veiculos[0]);
        } catch(error){
            return response.status(500).json({listar: 'Erro', message: error});
        }
    },
    async listarVeiculosId (request, response){
        try{
            
            const sql = 'SELECT vei_id, ent_id, vei_modelo, vei_marca, vei_placa, vei_ano, vei_cor, vei_tipo FROM Veiculos WHERE vei_id = ? ;';
            const Veiculos = await db.query(sql,[request.params.id])
            return response.status(200).json(Veiculos[0]);
        } catch(error){
            return response.status(500).json({listar: 'Erro', message: error});
        }
    },
    async inserirVeiculos(request, response){
        try{
            const {ent_id, vei_modelo, vei_marca, vei_placa, vei_ano, vei_cor, vei_tipo} = request.body;
            
            const sql = 'INSERT INTO Veiculos (ent_id, vei_modelo, vei_marca, vei_placa, vei_ano, vei_cor, vei_tipo) VALUES (?, ?,?, ?,?, ?,?)';
            await db.query(sql, [ent_id, vei_modelo, vei_marca, vei_placa, vei_ano, vei_cor, vei_tipo]);
            return response.status(201).json({inserir: 'Veiculos'});
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
