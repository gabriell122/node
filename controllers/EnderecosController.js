const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarEnderecos(request, response){
        try{

            const sql = 'SELECT end_id, usu_id, end_rua, end_numero, end_complemento, end_bairro, end_cidade, end_estado, end_cep, end_principal, end_apelido, end_entrega, end_status FROM Enderecos;';
            const Enderecos = await db.query(sql)
            return response.status(200).json(Enderecos[0]);
        } catch(error){
            return response.status(500).json({listar: 'Erro', message: error});
        }
    },
    async inserirEnderecos(request, response){
        try{
            return response.status(200).json({inserir: 'Enderecos'});
        } catch(error){
            return response.status(500).json({inserir: 'Erro', message: error});
        }
    },
    async alterarEnderecos(request, response){
        try{
            return response.status(200).json({alterar: 'Enderecos'});
        } catch(error){
            return response.status(500).json({alterar: 'Erro', message: error});
        }
    },
    async deletarEnderecos(request, response){
        try{
            return response.status(200).json({deletar: 'Enderecos'});
        } catch(error){
            return response.status(500).json({deletar: 'Erro', message: error});
        }
    },
    
}
