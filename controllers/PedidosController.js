const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarPedidos(request, response){
        try{
            const sql = 'SELECT ped_id, usu_id, fre_id, end_origem_id, end_destino_id, ped_dt_retirada, ped_dt_entrega, ped_cli_confirmacao, ped_localizacao, ped_localizacao_datahora, ped_valor_transporte, ped_valor_pedido, ped_tipo_pedido, ped_observacoes, ped_forma_pagamento, ped_prazo_entrega, ped_status, ped_ent_avaliacao, ped_ent_comentario FROM Pedidos;';
            const Pedidos = await db.query(sql)
            return response.status(200).json(Pedidos[0]);
        } catch(error){
            return response.status(500).json({listar: 'Erro', message: error});
        }
    },
    async listarPedidosId (request, response){
        
        try{
            
            const sql = ' SELECT ped_id, usu_id, fre_id, end_origem_id, end_destino_id, ped_dt_retirada, ped_dt_entrega, ped_cli_confirmacao, ped_localizacao, ped_localizacao_datahora, ped_valor_transporte, ped_valor_pedido, ped_tipo_pedido, ped_observacoes, ped_forma_pagamento, ped_prazo_entrega, ped_status, ped_ent_avaliacao, ped_ent_comentario FROM Pedidos WHERE ped_id = ? ;';
            const Pedidos = await db.query(sql,[request.params.id])
            return response.status(200).json(Pedidos[0]);
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
