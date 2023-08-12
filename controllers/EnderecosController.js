const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarEnderecos(request, response){
        try{

            const enderecoId = 1; // Defina o ID do endereço que você deseja buscar

            // Aqui você deve implementar a lógica para buscar as informações do endereço pelo ID
            // Por exemplo, usando o Mongoose para consultar um banco de dados
            const endereco = await Enderecos.findById(enderecoId);
        
            if (!endereco) {
                return response.status(404).json({ mensagem: 'Endereço não encontrado' });
            }
            return response.status(200).json({listar: 'Enderecos',endereco });
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
